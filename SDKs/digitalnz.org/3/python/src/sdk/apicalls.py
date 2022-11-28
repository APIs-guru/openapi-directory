import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class APICalls:
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

    
    def get_records_format_(self, request: operations.GetRecordsFormatRequest) -> operations.GetRecordsFormatResponse:
        r"""Run queries against DigitalNZ metadata search service.
        This is the main search endpoint allowing queries against the records database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/records.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRecordsFormat200ApplicationJSON])
                res.get_records_format_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_records_format_400_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_records_format_403_application_json_object = out

        return res

    
    def get_records_record_id_json(self, request: operations.GetRecordsRecordIDJSONRequest) -> operations.GetRecordsRecordIDJSONResponse:
        r"""View metadata associated with a single record.
        If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/records/{record_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordsRecordIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Record])
                res.record = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_records_record_id_json_403_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_records_record_id_json_404_application_json_object = out

        return res

    