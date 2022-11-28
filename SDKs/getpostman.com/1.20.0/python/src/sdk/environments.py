import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Environments:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def all_environments(self) -> operations.AllEnvironmentsResponse:
        r"""All Environments
        The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
        
        The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/environments"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllEnvironments200ApplicationJSON])
                res.all_environments_200_application_json_object = out

        return res

    
    def create_environment(self, request: operations.CreateEnvironmentRequest) -> operations.CreateEnvironmentResponse:
        r"""Create Environment
        A sample body is added to the request that conforms to the following JSON schema:
        
        ```json
        {
          \"type\": \"object\",
          \"properties\": {
            \"environment\": {
              \"type\": \"object\",
              \"properties\": {
                \"name\": {
                      \"type\": \"string\",
                      \"maxLength\": 254,
                      \"minLength\": 1
                    },
                \"values\": {
                  \"type\": \"array\",
                  \"maxItems\": 100,
                  \"additionalItems\": false,
                  \"items\": {
                      \"type\": \"object\",
                      \"properties\": {
                        \"key\": {
                          \"type\": \"string\",
                          \"maxLength\": 254
                          \"minLength\": 1
                        },
                        \"value\": { \"type\": \"string\" },
                        \"enabled\": { \"type\": \"boolean\" }
                      },
                      \"required\": [\"key\", \"value\"]
                    }
                }
              },
              \"required\": [\"name\"]
            }
          },
          \"required\": [\"environment\"]
        }
        ```
        
        On successful creation of the environment, the API returns the environment name and `id`.
        
        You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/environments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateEnvironment200ApplicationJSON])
                res.create_environment_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateEnvironment400ApplicationJSON])
                res.create_environment_400_application_json_object = out

        return res

    
    def delete_environment(self, request: operations.DeleteEnvironmentRequest) -> operations.DeleteEnvironmentResponse:
        r"""Delete Environment
        This endpoint allows you to delete a single environment based on an environment's unique `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/environments/{environment_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteEnvironment200ApplicationJSON])
                res.delete_environment_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteEnvironment404ApplicationJSON])
                res.delete_environment_404_application_json_object = out

        return res

    
    def single_environment(self, request: operations.SingleEnvironmentRequest) -> operations.SingleEnvironmentResponse:
        r"""Single Environment
        Access the contents of an environment that is accessible to you using its unique id (`uid`).
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/environments/{environment_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleEnvironment200ApplicationJSON])
                res.single_environment_200_application_json_object = out

        return res

    
    def update_environment(self, request: operations.UpdateEnvironmentRequest) -> operations.UpdateEnvironmentResponse:
        r"""Update Environment
        This endpoint replaces an existing environment.
        
        A sample body is added to the request that conforms to the following JSON schema:
        
        ```json
        {
        	\"type\": \"object\",
        	\"properties\": {
        		\"environment\": {
        			\"type\": \"object\",
        			\"properties\": {
        				\"name\": {
        					\"type\": \"string\",
        					\"maxLength\": 254,
        					\"minLength\": 1
        				},
        				\"values\": {
        					\"type\": \"array\",
        					\"maxItems\": 100,
        					\"additionalItems\": false,
        					\"items\": {
        						\"type\": \"object\",
        						\"properties\": {
        							\"key\": {
        								\"type\": \"string\",
        								\"maxLength\": 254,
        								\"minLength\": 1
        							},
        							\"value\": {
        								\"type\": \"string\",
        								\"maxLength\": 254,
        								\"minLength\": 1
        							},
        							\"type\": {
        								\"type\": \"string\"
        							},
        							\"enabled\": {
        								\"type\": \"boolean\"
        							}
        						},
        						\"required\": [
        							\"key\",
        							\"value\"
        						]
        					}
        				}
        			}
        		}
        	},
        	\"required\": [
        		\"environment\"
        	]
        }
        ```
        
        On successful updation of the environment, the API returns the environment name and `id`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/environments/{environment_uid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateEnvironment200ApplicationJSON])
                res.update_environment_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateEnvironment400ApplicationJSON])
                res.update_environment_400_application_json_object = out

        return res

    