import requests
from sdk.models import operations
from . import utils

class Metrics:
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

    
    def document_similarity(self, request: operations.DocumentSimilarityRequest) -> operations.DocumentSimilarityResponse:
        r"""Estimates the similarity between 2 Documents
        The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/DocumentSimilarity.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentSimilarityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    