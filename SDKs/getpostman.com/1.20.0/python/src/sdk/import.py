import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Import:
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

    
    def import_exported_data(self, request: operations.ImportExportedDataRequest) -> operations.ImportExportedDataResponse:
        r"""Import exported data
        This endpoint allows you to import your exported Postman data.
        For more information about how you can export your data, refer <a href=\"https://go.postman.co/me/export\">Export your Postman data.</a>
        
        On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.
        
        **Note**: Refer to examples for different scenarios.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/import/exported"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportExportedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImportExportedData200ApplicationJSON])
                res.import_exported_data_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImportExportedData400ApplicationJSON])
                res.import_exported_data_400_application_json_object = out

        return res

    
    def import_external_api_specification(self, request: operations.ImportExternalAPISpecificationRequest) -> operations.ImportExternalAPISpecificationResponse:
        r"""Import external API specification
        This endpoint allows you to import external API specifications into Postman.
        
        Currently, this endpoint only supports the <a href=\"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md\">OpenAPI</a> specification, for which the `importType` will be `openapi`.
        
        On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
        
        Supported `type`s:
        
        - string
        - json
        - file
        
        The `input` parameter should be defined based on the `type`.
        
        > To import a file, request body must be form-data with `type` param set to `file`.
        
        **Note**: Refer to examples for different scenarios.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/import/openapi"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportExternalAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImportExternalAPISpecification200ApplicationJSON])
                res.import_external_api_specification_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImportExternalAPISpecification400ApplicationJSON])
                res.import_external_api_specification_400_application_json_object = out

        return res

    