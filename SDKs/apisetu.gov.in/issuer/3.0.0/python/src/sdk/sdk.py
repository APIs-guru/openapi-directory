

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://Your API URL",
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
        
    
    
    
    def pull_doc(self, request: operations.PullDocRequest) -> operations.PullDocResponse:
        r"""Pull Doc Request API.
        The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Your Pull DOC Request API Path"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullDocResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def pull_uri(self, request: operations.PullURIRequest) -> operations.PullURIResponse:
        r"""Pull URI Request API .
        The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Your Pull URI Request API Path"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    