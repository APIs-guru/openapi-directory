import requests
from sdk.models import operations
from . import utils

class Reviews:
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

    
    def androidpublisher_reviews_get(self, request: operations.AndroidpublisherReviewsGetRequest) -> operations.AndroidpublisherReviewsGetResponse:
        r"""Returns a single review.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_reviews_list(self, request: operations.AndroidpublisherReviewsListRequest) -> operations.AndroidpublisherReviewsListResponse:
        r"""Returns a list of reviews. Only reviews from last week will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_reviews_reply(self, request: operations.AndroidpublisherReviewsReplyRequest) -> operations.AndroidpublisherReviewsReplyResponse:
        r"""Reply to a single review, or update an existing reply.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/reviews/{reviewId}:reply", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    