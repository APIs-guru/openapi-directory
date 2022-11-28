import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Schema:
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

    