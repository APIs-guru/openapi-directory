import requests
from typing import Optional
from sdk.models import operations
from . import utils

class API:
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

    
    def create_api(self, request: operations.CreateAPIRequest) -> operations.CreateAPIResponse:
        r"""Create API
        This call creates a new API with a default API Version.  
        
        Request body should contain an `api` object which should atleast have a property `name`.
        
        Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apis"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAPI200ApplicationJSON])
                res.create_api_200_application_json_object = out

        return res

    
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

    
    def create_collection_from_schema(self, request: operations.CreateCollectionFromSchemaRequest) -> operations.CreateCollectionFromSchemaResponse:
        r"""Create collection from schema
        This call creates a collection and links it to an API as one or multiple relations. 
        
        Request body requires two keys:
        - `name` - Name of the collection to be created.
        - `relations` - A list of relation(s) to be created.
        
        The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCollectionFromSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCollectionFromSchema200ApplicationJSON])
                res.create_collection_from_schema_200_application_json_object = out

        return res

    
    def create_relations(self, request: operations.CreateRelationsRequest) -> operations.CreateRelationsResponse:
        r"""Create relations
        This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 
        
        <table>
          <tr>
            <th>Relation</th>
            <th>Entity ID type</th>
          <tr>
          <tr>
            <td>contracttest</td>
            <td>Collection UIDs</td>
          </tr>
          <tr>
            <td>integrationtest</td>
            <td>Collection UIDs</td>
          </tr>
          <tr>
            <td>documentation</td>
            <td>Collection UIDs</td>
          </tr>
          <tr>
            <td>testsuite</td>
            <td>Collection UIDs</td>
          </tr>
          <tr>
            <td>environment</td>
            <td>Environment UIDs</td>
          </tr>
          <tr>
            <td>mock</td>
            <td>Mock IDs</td>
          </tr>
          <tr>
            <td>monitor</td>
            <td>Monitor IDs</td>
          </tr>
        </table>
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/relations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateRelations200ApplicationJSON])
                res.create_relations_200_application_json_object = out

        return res

    
    def create_schema(self, request: operations.CreateSchemaRequest) -> operations.CreateSchemaResponse:
        r"""Create Schema
        This call creates a new schema.
        
        Request body should contain a `schema` object which should atleast have these properties with `string` values:
        
        - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
        - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
        - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
        
        Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/schemas", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSchema200ApplicationJSON])
                res.create_schema_200_application_json_object = out

        return res

    
    def delete_an_api(self, request: operations.DeleteAnAPIRequest) -> operations.DeleteAnAPIResponse:
        r"""Delete an API
        This call deletes an existing API having the specified id.  
        
        Response contains an `api` object with `id` of the API which was deleted.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnAPI200ApplicationJSON])
                res.delete_an_api_200_application_json_object = out

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

    
    def get_all_ap_is(self, request: operations.GetAllApIsRequest) -> operations.GetAllApIsResponse:
        r"""Get all APIs
        This call fetches all the APIs present in the specified workspace
        
        Response contains an array named `apis` which would contain all the details of APIs present in the workspace.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apis"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllApIsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

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

    
    def get_contract_test_relations(self, request: operations.GetContractTestRelationsRequest) -> operations.GetContractTestRelationsResponse:
        r"""Get contract test relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/contracttest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContractTestRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContractTestRelations200ApplicationJSON])
                res.get_contract_test_relations_200_application_json_object = out

        return res

    
    def get_documentation_relations(self, request: operations.GetDocumentationRelationsRequest) -> operations.GetDocumentationRelationsResponse:
        r"""Get  documentation relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/documentation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentationRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDocumentationRelations200ApplicationJSON])
                res.get_documentation_relations_200_application_json_object = out

        return res

    
    def get_environment_relations(self, request: operations.GetEnvironmentRelationsRequest) -> operations.GetEnvironmentRelationsResponse:
        r"""Get environment relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/environment", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEnvironmentRelations200ApplicationJSON])
                res.get_environment_relations_200_application_json_object = out

        return res

    
    def get_integration_test_relations(self, request: operations.GetIntegrationTestRelationsRequest) -> operations.GetIntegrationTestRelationsResponse:
        r"""Get integration test relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/integrationtest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationTestRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationTestRelations200ApplicationJSON])
                res.get_integration_test_relations_200_application_json_object = out

        return res

    
    def get_linked_relations(self, request: operations.GetLinkedRelationsRequest) -> operations.GetLinkedRelationsResponse:
        r"""Get linked relations
        This call fetches all the relations which are linked to the specified API version along with their details.
        
        The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/relations", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinkedRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinkedRelations200ApplicationJSON])
                res.get_linked_relations_200_application_json_object = out

        return res

    
    def get_monitor_relations(self, request: operations.GetMonitorRelationsRequest) -> operations.GetMonitorRelationsResponse:
        r"""Get monitor relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/monitor", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMonitorRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMonitorRelations200ApplicationJSON])
                res.get_monitor_relations_200_application_json_object = out

        return res

    
    def get_schema(self, request: operations.GetSchemaRequest) -> operations.GetSchemaResponse:
        r"""Get Schema
        This call fetches a single schema having the specified id.
        
        Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchema200ApplicationJSON])
                res.get_schema_200_application_json_object = out

        return res

    
    def get_test_suite_relations(self, request: operations.GetTestSuiteRelationsRequest) -> operations.GetTestSuiteRelationsResponse:
        r"""Get test suite relations
        This call fetches all the relations by type which are linked to the specified API version along with their details.
        
        The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/testsuite", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTestSuiteRelationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTestSuiteRelations200ApplicationJSON])
                res.get_test_suite_relations_200_application_json_object = out

        return res

    
    def single_api(self, request: operations.SingleAPIRequest) -> operations.SingleAPIResponse:
        r"""Single API
        This call fetches a single API having the specified id.
        
        Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleAPI200ApplicationJSON])
                res.single_api_200_application_json_object = out

        return res

    
    def sync_relations_with_schema(self, request: operations.SyncRelationsWithSchemaRequest) -> operations.SyncRelationsWithSchemaResponse:
        r"""Sync relations with schema
        This call allows you to keep the relation in sync with the API schema.
        
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncRelationsWithSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SyncRelationsWithSchema200ApplicationJSON])
                res.sync_relations_with_schema_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SyncRelationsWithSchema400ApplicationJSON])
                res.sync_relations_with_schema_400_application_json_object = out

        return res

    
    def update_an_api(self, request: operations.UpdateAnAPIRequest) -> operations.UpdateAnAPIResponse:
        r"""Update an API
        This call updates an existing API .  
        
        Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.
        
        Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAnAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateAnAPI200ApplicationJSON])
                res.update_an_api_200_application_json_object = out

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

    
    def update_schema(self, request: operations.UpdateSchemaRequest) -> operations.UpdateSchemaResponse:
        r"""Update Schema
        This call updates an existing schema.
        
        Request body should contain a `schema` object which should atleast have these properties with `string` values:
        
        - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
        - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
        - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
        
        Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateSchema200ApplicationJSON])
                res.update_schema_200_application_json_object = out

        return res

    