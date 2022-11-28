import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Licenses:
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

    
    def licenses_get(self, request: operations.LicensesGetRequest) -> operations.LicensesGetResponse:
        r"""Get a license
        https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-a-license - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/licenses/{license}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.License])
                res.license = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def licenses_get_all_commonly_used(self, request: operations.LicensesGetAllCommonlyUsedRequest) -> operations.LicensesGetAllCommonlyUsedResponse:
        r"""Get all commonly used licenses
        https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-all-commonly-used-licenses - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/licenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensesGetAllCommonlyUsedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LicenseSimple]])
                res.license_simples = out
        elif r.status_code == 304:
            pass

        return res

    
    def licenses_get_for_repo(self, request: operations.LicensesGetForRepoRequest) -> operations.LicensesGetForRepoResponse:
        r"""Get the license for a repository
        This method returns the contents of the repository's license file, if one is detected.
        
        Similar to [Get repository content](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
        https://docs.github.com/enterprise-server@3.0/rest/reference/licenses/#get-the-license-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/license", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensesGetForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseContent])
                res.license_content = out

        return res

    