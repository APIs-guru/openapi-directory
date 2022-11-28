import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PartyCoordinatedExpenditures:
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

    
    def get_schedules_schedule_f_(self, request: operations.GetSchedulesScheduleFRequest) -> operations.GetSchedulesScheduleFResponse:
        r"""
        Schedule F, it shows all special expenditures a national or state party committee
        makes in connection with the general election campaigns of federal candidates.
        
        These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
        these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_f/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleFResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleFDefaultApplicationJSON])
                res.get_schedules_schedule_f_default_application_json_object = out

        return res

    
    def get_schedules_schedule_f_sub_id_(self, request: operations.GetSchedulesScheduleFSubIDRequest) -> operations.GetSchedulesScheduleFSubIDResponse:
        r"""
        Schedule F, it shows all special expenditures a national or state party committee
        makes in connection with the general election campaigns of federal candidates.
        
        These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
        these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schedules/schedule_f/{sub_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleFSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleFSubIDDefaultApplicationJSON])
                res.get_schedules_schedule_f_sub_id_default_application_json_object = out

        return res

    