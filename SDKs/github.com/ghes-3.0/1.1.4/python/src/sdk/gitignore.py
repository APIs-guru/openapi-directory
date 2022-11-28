import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Gitignore:
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

    
    def gitignore_get_all_templates(self) -> operations.GitignoreGetAllTemplatesResponse:
        r"""Get all gitignore templates
        List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-for-the-authenticated-user).
        https://docs.github.com/enterprise-server@3.0/rest/reference/gitignore#get-all-gitignore-templates - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gitignore/templates"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitignoreGetAllTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.gitignore_get_all_templates_200_application_json_strings = out
        elif r.status_code == 304:
            pass

        return res

    
    def gitignore_get_template(self, request: operations.GitignoreGetTemplateRequest) -> operations.GitignoreGetTemplateResponse:
        r"""Get a gitignore template
        The API also allows fetching the source of a single template.
        Use the raw [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) to get the raw contents.
        https://docs.github.com/enterprise-server@3.0/rest/reference/gitignore#get-a-gitignore-template - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gitignore/templates/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitignoreGetTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitignoreTemplate])
                res.gitignore_template = out
        elif r.status_code == 304:
            pass

        return res

    