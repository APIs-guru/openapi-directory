import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Loans:
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

    
    def get_schedules_schedule_c_(self, request: operations.GetSchedulesScheduleCRequest) -> operations.GetSchedulesScheduleCResponse:
        r"""
        Schedule C shows all loans, endorsements and loan guarantees a committee
        receives or makes.
        
        The committee continues to report the loan until it is repaid.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_c/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleCResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleCDefaultApplicationJSON])
                res.get_schedules_schedule_c_default_application_json_object = out

        return res

    
    def get_schedules_schedule_c_sub_id_(self, request: operations.GetSchedulesScheduleCSubIDRequest) -> operations.GetSchedulesScheduleCSubIDResponse:
        r"""
        Schedule C shows all loans, endorsements and loan guarantees a committee
        receives or makes.
        
        The committee continues to report the loan until it is repaid.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schedules/schedule_c/{sub_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleCSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleCSubIDDefaultApplicationJSON])
                res.get_schedules_schedule_c_sub_id_default_application_json_object = out

        return res

    