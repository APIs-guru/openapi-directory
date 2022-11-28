

import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://apisetu.gov.in/labourbih/v3",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def alimw(self, request: operations.AlimwRequest) -> operations.AlimwResponse:
        r"""Application for License for Inter State Migrant Workmen
        API to verify Application for License for Inter State Migrant Workmen.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alimw/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlimwResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw400ApplicationJSON])
                res.alimw_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw401ApplicationJSON])
                res.alimw_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw404ApplicationJSON])
                res.alimw_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw500ApplicationJSON])
                res.alimw_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw502ApplicationJSON])
                res.alimw_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw503ApplicationJSON])
                res.alimw_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alimw504ApplicationJSON])
                res.alimw_504_application_json_object = out

        return res

    
    def alsbl(self, request: operations.AlsblRequest) -> operations.AlsblResponse:
        r"""Application/ License for Boilers
        API to verify Application/ License for Boilers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alsbl/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlsblResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl400ApplicationJSON])
                res.alsbl_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl401ApplicationJSON])
                res.alsbl_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl404ApplicationJSON])
                res.alsbl_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl500ApplicationJSON])
                res.alsbl_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl502ApplicationJSON])
                res.alsbl_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl503ApplicationJSON])
                res.alsbl_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsbl504ApplicationJSON])
                res.alsbl_504_application_json_object = out

        return res

    
    def alsfc(self, request: operations.AlsfcRequest) -> operations.AlsfcResponse:
        r"""Application/ License for Factory
        API to verify Application/ License for Factory.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alsfc/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlsfcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc400ApplicationJSON])
                res.alsfc_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc401ApplicationJSON])
                res.alsfc_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc404ApplicationJSON])
                res.alsfc_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc500ApplicationJSON])
                res.alsfc_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc502ApplicationJSON])
                res.alsfc_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc503ApplicationJSON])
                res.alsfc_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Alsfc504ApplicationJSON])
                res.alsfc_504_application_json_object = out

        return res

    
    def apptu(self, request: operations.ApptuRequest) -> operations.ApptuResponse:
        r"""Application realted to Trade Unions
        API to verify Application realted to Trade Unions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apptu/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApptuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu400ApplicationJSON])
                res.apptu_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu401ApplicationJSON])
                res.apptu_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu404ApplicationJSON])
                res.apptu_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu500ApplicationJSON])
                res.apptu_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu502ApplicationJSON])
                res.apptu_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu503ApplicationJSON])
                res.apptu_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Apptu504ApplicationJSON])
                res.apptu_504_application_json_object = out

        return res

    
    def clcer(self, request: operations.ClcerRequest) -> operations.ClcerResponse:
        r"""Registration Certificate for Contract Labour License
        API to verify Registration Certificate for Contract Labour License.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/clcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer400ApplicationJSON])
                res.clcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer401ApplicationJSON])
                res.clcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer404ApplicationJSON])
                res.clcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer500ApplicationJSON])
                res.clcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer502ApplicationJSON])
                res.clcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer503ApplicationJSON])
                res.clcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Clcer504ApplicationJSON])
                res.clcer_504_application_json_object = out

        return res

    
    def noocl(self, request: operations.NooclRequest) -> operations.NooclResponse:
        r"""Notice of Closure
        API to verify Notice of Closure.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/noocl/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NooclResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl400ApplicationJSON])
                res.noocl_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl401ApplicationJSON])
                res.noocl_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl404ApplicationJSON])
                res.noocl_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl500ApplicationJSON])
                res.noocl_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl502ApplicationJSON])
                res.noocl_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl503ApplicationJSON])
                res.noocl_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Noocl504ApplicationJSON])
                res.noocl_504_application_json_object = out

        return res

    
    def srcer(self, request: operations.SrcerRequest) -> operations.SrcerResponse:
        r"""Registration Certificate of Shops And Commercial Establishment
        API to verify Registration Certificate of Shops And Commercial Establishment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/srcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SrcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer400ApplicationJSON])
                res.srcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer401ApplicationJSON])
                res.srcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer404ApplicationJSON])
                res.srcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer500ApplicationJSON])
                res.srcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer502ApplicationJSON])
                res.srcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer503ApplicationJSON])
                res.srcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Srcer504ApplicationJSON])
                res.srcer_504_application_json_object = out

        return res

    