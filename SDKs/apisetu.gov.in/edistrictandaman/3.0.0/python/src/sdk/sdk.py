

import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://apisetu.gov.in/edistrictandaman/v3",
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
        
    
    
    
    def brlcs(self, request: operations.BrlcsRequest) -> operations.BrlcsResponse:
        r"""Bar License
        API to verify Bar License.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/brlcs/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BrlcsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs400ApplicationJSON])
                res.brlcs_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs401ApplicationJSON])
                res.brlcs_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs404ApplicationJSON])
                res.brlcs_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs500ApplicationJSON])
                res.brlcs_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs502ApplicationJSON])
                res.brlcs_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs503ApplicationJSON])
                res.brlcs_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Brlcs504ApplicationJSON])
                res.brlcs_504_application_json_object = out

        return res

    
    def dpcer(self, request: operations.DpcerRequest) -> operations.DpcerResponse:
        r"""Dependency Certificate
        API to verify Dependency Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dpcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DpcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer400ApplicationJSON])
                res.dpcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer401ApplicationJSON])
                res.dpcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer404ApplicationJSON])
                res.dpcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer500ApplicationJSON])
                res.dpcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer502ApplicationJSON])
                res.dpcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer503ApplicationJSON])
                res.dpcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Dpcer504ApplicationJSON])
                res.dpcer_504_application_json_object = out

        return res

    
    def fmcer(self, request: operations.FmcerRequest) -> operations.FmcerResponse:
        r"""Family Membership Certificate
        API to verify Family Membership Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fmcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FmcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer400ApplicationJSON])
                res.fmcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer401ApplicationJSON])
                res.fmcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer404ApplicationJSON])
                res.fmcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer500ApplicationJSON])
                res.fmcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer502ApplicationJSON])
                res.fmcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer503ApplicationJSON])
                res.fmcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Fmcer504ApplicationJSON])
                res.fmcer_504_application_json_object = out

        return res

    
    def incer(self, request: operations.IncerRequest) -> operations.IncerResponse:
        r"""Income Certificate
        API to verify Income Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/incer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer400ApplicationJSON])
                res.incer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer401ApplicationJSON])
                res.incer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer404ApplicationJSON])
                res.incer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer500ApplicationJSON])
                res.incer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer502ApplicationJSON])
                res.incer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer503ApplicationJSON])
                res.incer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Incer504ApplicationJSON])
                res.incer_504_application_json_object = out

        return res

    
    def lccep(self, request: operations.LccepRequest) -> operations.LccepResponse:
        r"""Local Candidate/ Status Certificate
        API to verify Local Candidate/ Status Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lccep/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LccepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep400ApplicationJSON])
                res.lccep_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep401ApplicationJSON])
                res.lccep_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep404ApplicationJSON])
                res.lccep_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep500ApplicationJSON])
                res.lccep_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep502ApplicationJSON])
                res.lccep_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep503ApplicationJSON])
                res.lccep_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Lccep504ApplicationJSON])
                res.lccep_504_application_json_object = out

        return res

    
    def ndcer(self, request: operations.NdcerRequest) -> operations.NdcerResponse:
        r"""No Dues/ Objection Certificate
        API to verify No Dues/ Objection Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ndcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NdcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer400ApplicationJSON])
                res.ndcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer401ApplicationJSON])
                res.ndcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer404ApplicationJSON])
                res.ndcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer500ApplicationJSON])
                res.ndcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer502ApplicationJSON])
                res.ndcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer503ApplicationJSON])
                res.ndcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Ndcer504ApplicationJSON])
                res.ndcer_504_application_json_object = out

        return res

    
    def obcer(self, request: operations.ObcerRequest) -> operations.ObcerResponse:
        r"""OBC Certificate
        API to verify OBC Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/obcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer400ApplicationJSON])
                res.obcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer401ApplicationJSON])
                res.obcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer404ApplicationJSON])
                res.obcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer500ApplicationJSON])
                res.obcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer502ApplicationJSON])
                res.obcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer503ApplicationJSON])
                res.obcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Obcer504ApplicationJSON])
                res.obcer_504_application_json_object = out

        return res

    
    def rmcer(self, request: operations.RmcerRequest) -> operations.RmcerResponse:
        r"""Marriage Certificate
        API to verify Marriage Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rmcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RmcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer400ApplicationJSON])
                res.rmcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer401ApplicationJSON])
                res.rmcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer404ApplicationJSON])
                res.rmcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer500ApplicationJSON])
                res.rmcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer502ApplicationJSON])
                res.rmcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer503ApplicationJSON])
                res.rmcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rmcer504ApplicationJSON])
                res.rmcer_504_application_json_object = out

        return res

    
    def rscer(self, request: operations.RscerRequest) -> operations.RscerResponse:
        r"""Residence Certificate
        API to verify Residence Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rscer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RscerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer400ApplicationJSON])
                res.rscer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer401ApplicationJSON])
                res.rscer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer404ApplicationJSON])
                res.rscer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer500ApplicationJSON])
                res.rscer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer502ApplicationJSON])
                res.rscer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer503ApplicationJSON])
                res.rscer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rscer504ApplicationJSON])
                res.rscer_504_application_json_object = out

        return res

    
    def rucer(self, request: operations.RucerRequest) -> operations.RucerResponse:
        r"""Regional Language(s) Certificate
        API to verify Regional Language(s) Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rucer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RucerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer400ApplicationJSON])
                res.rucer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer401ApplicationJSON])
                res.rucer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer404ApplicationJSON])
                res.rucer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer500ApplicationJSON])
                res.rucer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer502ApplicationJSON])
                res.rucer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer503ApplicationJSON])
                res.rucer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Rucer504ApplicationJSON])
                res.rucer_504_application_json_object = out

        return res

    
    def sicrd(self, request: operations.SicrdRequest) -> operations.SicrdResponse:
        r"""Senior Citizen Identity Card/ Certificate
        API to verify Senior Citizen Identity Card/ Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sicrd/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SicrdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd400ApplicationJSON])
                res.sicrd_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd401ApplicationJSON])
                res.sicrd_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd404ApplicationJSON])
                res.sicrd_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd500ApplicationJSON])
                res.sicrd_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd502ApplicationJSON])
                res.sicrd_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd503ApplicationJSON])
                res.sicrd_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sicrd504ApplicationJSON])
                res.sicrd_504_application_json_object = out

        return res

    
    def vlcer(self, request: operations.VlcerRequest) -> operations.VlcerResponse:
        r"""Valuation Certificate
        API to verify Valuation Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vlcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VlcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer400ApplicationJSON])
                res.vlcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer401ApplicationJSON])
                res.vlcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer404ApplicationJSON])
                res.vlcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer500ApplicationJSON])
                res.vlcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer502ApplicationJSON])
                res.vlcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer503ApplicationJSON])
                res.vlcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Vlcer504ApplicationJSON])
                res.vlcer_504_application_json_object = out

        return res

    