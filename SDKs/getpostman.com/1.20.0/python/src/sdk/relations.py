import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Relations:
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

    