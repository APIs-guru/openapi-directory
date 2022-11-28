import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Meta:
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

    
    def meta_get(self) -> operations.MetaGetResponse:
        r"""Get GitHub Enterprise Server meta information
        https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-github-meta-information - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/meta"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIOverview])
                res.api_overview = out
        elif r.status_code == 304:
            pass

        return res

    
    def meta_get_octocat(self, request: operations.MetaGetOctocatRequest) -> operations.MetaGetOctocatResponse:
        r"""Get Octocat
        Get the octocat as ASCII art
        https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-octocat - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/octocat"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaGetOctocatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octocat-stream"):
                res.meta_get_octocat_200_application_octocat_stream_string = r.content

        return res

    
    def meta_get_zen(self) -> operations.MetaGetZenResponse:
        r"""Get the Zen of GitHub
        Get a random sentence from the Zen of GitHub
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/zen"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaGetZenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.meta_get_zen_200_text_plain_string = r.content

        return res

    
    def meta_root(self) -> operations.MetaRootResponse:
        r"""GitHub API Root
        Get Hypermedia links to resources accessible in GitHub's REST API
        https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#root-endpoint - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaRootResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MetaRoot200ApplicationJSON])
                res.meta_root_200_application_json_object = out

        return res

    