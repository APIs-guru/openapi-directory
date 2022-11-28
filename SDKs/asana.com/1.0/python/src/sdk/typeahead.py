import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Typeahead:
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

    
    def typeahead_for_workspace(self, request: operations.TypeaheadForWorkspaceRequest) -> operations.TypeaheadForWorkspaceResponse:
        r"""Get objects via typeahead
        Retrieves objects in the workspace based via an auto-completion/typeahead
        search algorithm. This feature is meant to provide results quickly, so do
        not rely on this API to provide extremely accurate search results. The
        result set is limited to a single page of results with a maximum size, so
        you won’t be able to fetch large numbers of results.
        
        The typeahead search API provides search for objects from a single
        workspace. This endpoint should be used to query for objects when
        creating an auto-completion/typeahead search feature. This API is meant
        to provide results quickly and should not be relied upon for accurate or
        exhaustive search results. The results sets are limited in size and
        cannot be paginated.
        
        Queries return a compact representation of each object which is typically
        the gid and name fields. Interested in a specific set of fields or all of
        the fields?! Of course you are. Use field selectors to manipulate what
        data is included in a response.
        
        Resources with type `user` are returned in order of most contacted to
        least contacted. This is determined by task assignments, adding the user
        to projects, and adding the user as a follower to tasks, messages,
        etc.
        
        Resources with type `project` are returned in order of recency. This is
        determined when the user visits the project, is added to the project, and
        completes tasks in the project.
        
        Resources with type `task` are returned with priority placed on tasks
        the user is following, but no guarantee on the order of those tasks.
        
        Leaving the `query` string empty or omitted will give you results, still
        following the resource ordering above. This could be used to list users or
        projects that are relevant for the requesting user's api token.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace_gid}/typeahead", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TypeaheadForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TypeaheadForWorkspace200ApplicationJSON])
                res.typeahead_for_workspace_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    