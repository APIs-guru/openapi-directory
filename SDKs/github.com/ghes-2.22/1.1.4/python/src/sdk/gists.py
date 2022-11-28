import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Gists:
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

    
    def gists_check_is_starred(self, request: operations.GistsCheckIsStarredRequest) -> operations.GistsCheckIsStarredResponse:
        r"""Check if a gist is starred
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#check-if-a-gist-is-starred - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/star", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsCheckIsStarredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.gists_check_is_starred_404_application_json_object = out

        return res

    
    def gists_create(self, request: operations.GistsCreateRequest) -> operations.GistsCreateResponse:
        r"""Create a gist
        Allows you to add a new gist with one or more files.
        
        **Note:** Don't name your files \"gistfile\" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#create-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gists"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistSimple])
                res.gist_simple = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_create_comment(self, request: operations.GistsCreateCommentRequest) -> operations.GistsCreateCommentResponse:
        r"""Create a gist comment
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#create-a-gist-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsCreateCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistComment])
                res.gist_comment = out
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

    
    def gists_delete(self, request: operations.GistsDeleteRequest) -> operations.GistsDeleteResponse:
        r"""Delete a gist
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#delete-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def gists_delete_comment(self, request: operations.GistsDeleteCommentRequest) -> operations.GistsDeleteCommentResponse:
        r"""Delete a gist comment
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#delete-a-gist-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def gists_fork(self, request: operations.GistsForkRequest) -> operations.GistsForkResponse:
        r"""Fork a gist
        **Note**: This was previously `/gists/:gist_id/fork`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#fork-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/forks", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsForkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseGist])
                res.base_gist = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_get(self, request: operations.GistsGetRequest) -> operations.GistsGetResponse:
        r"""Get a gist
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#get-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistSimple])
                res.gist_simple = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GistsGet403ApplicationJSON])
                res.gists_get_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def gists_get_comment(self, request: operations.GistsGetCommentRequest) -> operations.GistsGetCommentResponse:
        r"""Get a gist comment
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#get-a-gist-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsGetCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistComment])
                res.gist_comment = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GistsGetComment403ApplicationJSON])
                res.gists_get_comment_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def gists_get_revision(self, request: operations.GistsGetRevisionRequest) -> operations.GistsGetRevisionResponse:
        r"""Get a gist revision
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#get-a-gist-revision - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/{sha}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsGetRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistSimple])
                res.gist_simple = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_list(self, request: operations.GistsListRequest) -> operations.GistsListResponse:
        r"""List gists for the authenticated user
        Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-gists-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseGist]])
                res.base_gists = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def gists_list_comments(self, request: operations.GistsListCommentsRequest) -> operations.GistsListCommentsResponse:
        r"""List gist comments
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-gist-comments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GistComment]])
                res.gist_comments = out
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

    
    def gists_list_commits(self, request: operations.GistsListCommitsRequest) -> operations.GistsListCommitsResponse:
        r"""List gist commits
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-gist-commits - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/commits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GistCommit]])
                res.gist_commits = out
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

    
    def gists_list_for_user(self, request: operations.GistsListForUserRequest) -> operations.GistsListForUserResponse:
        r"""List gists for a user
        Lists public gists for the specified user:
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-gists-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/gists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseGist]])
                res.base_gists = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_list_forks(self, request: operations.GistsListForksRequest) -> operations.GistsListForksResponse:
        r"""List gist forks
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-gist-forks - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/forks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListForksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GistSimple]])
                res.gist_simples = out
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

    
    def gists_list_public(self, request: operations.GistsListPublicRequest) -> operations.GistsListPublicResponse:
        r"""List public gists
        List public gists sorted by most recently updated to least recently updated.
        
        Note: With [pagination](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-public-gists - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gists/public"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseGist]])
                res.base_gists = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_list_starred(self, request: operations.GistsListStarredRequest) -> operations.GistsListStarredResponse:
        r"""List starred gists
        List the authenticated user's starred gists:
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#list-starred-gists - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gists/starred"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsListStarredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseGist]])
                res.base_gists = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def gists_star(self, request: operations.GistsStarRequest) -> operations.GistsStarResponse:
        r"""Star a gist
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#star-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/star", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsStarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def gists_unstar(self, request: operations.GistsUnstarRequest) -> operations.GistsUnstarResponse:
        r"""Unstar a gist
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#unstar-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/star", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsUnstarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def gists_update(self, request: operations.GistsUpdateRequest) -> operations.GistsUpdateResponse:
        r"""Update a gist
        Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists/#update-a-gist - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistSimple])
                res.gist_simple = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def gists_update_comment(self, request: operations.GistsUpdateCommentRequest) -> operations.GistsUpdateCommentResponse:
        r"""Update a gist comment
        https://docs.github.com/enterprise-server@2.22/rest/reference/gists#update-a-gist-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gists/{gist_id}/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GistsUpdateCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GistComment])
                res.gist_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    