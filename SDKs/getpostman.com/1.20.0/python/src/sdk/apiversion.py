import requests
from typing import Optional
from sdk.models import operations
from . import utils

class APIVersion:
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

    
    def create_api_version(self, request: operations.CreateAPIVersionRequest) -> operations.CreateAPIVersionResponse:
        r"""Create API Version
        This call creates a new API version in the specified API.  
        
        Request body should contain a `version` object which should have fields:
        
        <table>
        <tr>
        	<td>name</td>
        	<td>Required. Name of the API Version</td>
        </tr>
        <tr>
        	<td>source</td>
        	<td>
        		If specified, it will copy the contents of the specified api version to create a new api verison.
        		<table>
        			<tr>
        				<td>id</td>
        				<td>Required. Id of the apiversion from where the details are to be copied</td>
        			</tr>
        			<tr>
        				<td>schema</td>
        				<td>Boolean. If true then copies the schema from the specified api version</td>
        			</tr>
        			<tr>
        				<td>relations</td>
        				<td>Object. {\"&lt;relationType&gt;\": true/false}.  
        					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
        				Relation types which should be copied over to the new api verison</td>
        			</tr>
        		</table>
        	</td>
        </tr>
        </table>
        
        Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAPIVersion200ApplicationJSON])
                res.create_api_version_200_application_json_object = out

        return res

    
    def delete_an_api_version(self, request: operations.DeleteAnAPIVersionRequest) -> operations.DeleteAnAPIVersionResponse:
        r"""Delete an API Version
        This call deletes an existing API Version having the specified id.  
        
        Response contains an `version` object with `id` of the API Version which was deleted.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnAPIVersion200ApplicationJSON])
                res.delete_an_api_version_200_application_json_object = out

        return res

    
    def get_all_api_versions(self, request: operations.GetAllAPIVersionsRequest) -> operations.GetAllAPIVersionsResponse:
        r"""Get All API Versions
        This call fetches details about the all the API Versions in the specified API.
        
        The response will contain an array `versions` object which would be a list of all the API Version along with their details.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAPIVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllAPIVersions200ApplicationJSON])
                res.get_all_api_versions_200_application_json_object = out

        return res

    
    def get_an_api_version(self, request: operations.GetAnAPIVersionRequest) -> operations.GetAnAPIVersionResponse:
        r"""Get an API Version
        This call fetches details about the specified API Version.
        
        The response will contain a `version` object which would contain all the details of the API Version.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnAPIVersion200ApplicationJSON])
                res.get_an_api_version_200_application_json_object = out

        return res

    
    def update_an_api_version(self, request: operations.UpdateAnAPIVersionRequest) -> operations.UpdateAnAPIVersionResponse:
        r"""Update an API Version
        This call updates an existing API Version.  
        
        Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
        
        Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAnAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateAnAPIVersion200ApplicationJSON])
                res.update_an_api_version_200_application_json_object = out

        return res

    