import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CodesOfConduct:
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

    
    def codes_of_conduct_get_all_codes_of_conduct(self) -> operations.CodesOfConductGetAllCodesOfConductResponse:
        r"""Get all codes of conduct
        https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-all-codes-of-conduct - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/codes_of_conduct"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CodesOfConductGetAllCodesOfConductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CodeOfConduct]])
                res.code_of_conducts = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodesOfConductGetAllCodesOfConduct415ApplicationJSON])
                res.codes_of_conduct_get_all_codes_of_conduct_415_application_json_object = out

        return res

    
    def codes_of_conduct_get_conduct_code(self, request: operations.CodesOfConductGetConductCodeRequest) -> operations.CodesOfConductGetConductCodeResponse:
        r"""Get a code of conduct
        https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-a-code-of-conduct - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/codes_of_conduct/{key}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CodesOfConductGetConductCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeOfConduct])
                res.code_of_conduct = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodesOfConductGetConductCode415ApplicationJSON])
                res.codes_of_conduct_get_conduct_code_415_application_json_object = out

        return res

    