import requests
from sdk.models import operations
from . import utils

class InformationRetrieval:
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

    
    def keyword_extraction(self, request: operations.KeywordExtractionRequest) -> operations.KeywordExtractionResponse:
        r"""Extracts the Keywords of the Document
        The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/KeywordExtraction.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeywordExtractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def text_extraction(self, request: operations.TextExtractionRequest) -> operations.TextExtractionResponse:
        r"""Extracts the clear text from Webpage
        The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/TextExtraction.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TextExtractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    