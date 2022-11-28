import requests
from sdk.models import operations
from . import utils

class Markdown:
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

    
    def markdown_render(self, request: operations.MarkdownRenderRequest) -> operations.MarkdownRenderResponse:
        r"""Render a Markdown document
        https://docs.github.com/enterprise-server@3.0/rest/reference/markdown#render-a-markdown-document - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/markdown"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkdownRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/html"):
                res.markdown_render_200_text_html_string = r.content
        elif r.status_code == 304:
            pass

        return res

    
    def markdown_render_raw(self, request: operations.MarkdownRenderRawRequest) -> operations.MarkdownRenderRawResponse:
        r"""Render a Markdown document in raw mode
        You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
        https://docs.github.com/enterprise-server@3.0/rest/reference/markdown#render-a-markdown-document-in-raw-mode - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/markdown/raw"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkdownRenderRawResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/html"):
                res.markdown_render_raw_200_text_html_string = r.content
        elif r.status_code == 304:
            pass

        return res

    