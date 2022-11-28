import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def projects_add_collaborator(self, request: operations.ProjectsAddCollaboratorRequest) -> operations.ProjectsAddCollaboratorResponse:
        r"""Add project collaborator
        Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#add-project-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/collaborators/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsAddCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsAddCollaborator415ApplicationJSON])
                res.projects_add_collaborator_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def projects_create_card(self, request: operations.ProjectsCreateCardRequest) -> operations.ProjectsCreateCardResponse:
        r"""Create a project card
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#create-a-project-card - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}/cards", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectCard])
                res.project_card = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.projects_create_card_422_application_json_one_of = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsCreateCard503ApplicationJSON])
                res.projects_create_card_503_application_json_object = out

        return res

    
    def projects_create_column(self, request: operations.ProjectsCreateColumnRequest) -> operations.ProjectsCreateColumnResponse:
        r"""Create a project column
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#create-a-project-column - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/columns", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateColumnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectColumn])
                res.project_column = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_create_for_authenticated_user(self, request: operations.ProjectsCreateForAuthenticatedUserRequest) -> operations.ProjectsCreateForAuthenticatedUserResponse:
        r"""Create a user project
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#create-a-user-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/projects"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
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
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsCreateForAuthenticatedUser415ApplicationJSON])
                res.projects_create_for_authenticated_user_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_create_for_org(self, request: operations.ProjectsCreateForOrgRequest) -> operations.ProjectsCreateForOrgResponse:
        r"""Create an organization project
        Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#create-an-organization-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/projects", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_create_for_repo(self, request: operations.ProjectsCreateForRepoRequest) -> operations.ProjectsCreateForRepoResponse:
        r"""Create a repository project
        Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#create-a-repository-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/projects", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_delete(self, request: operations.ProjectsDeleteRequest) -> operations.ProjectsDeleteResponse:
        r"""Delete a project
        Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#delete-a-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsDelete403ApplicationJSON])
                res.projects_delete_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def projects_delete_card(self, request: operations.ProjectsDeleteCardRequest) -> operations.ProjectsDeleteCardResponse:
        r"""Delete a project card
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#delete-a-project-card - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/cards/{card_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsDeleteCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsDeleteCard403ApplicationJSON])
                res.projects_delete_card_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def projects_delete_column(self, request: operations.ProjectsDeleteColumnRequest) -> operations.ProjectsDeleteColumnResponse:
        r"""Delete a project column
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#delete-a-project-column - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsDeleteColumnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def projects_get(self, request: operations.ProjectsGetRequest) -> operations.ProjectsGetResponse:
        r"""Get a project
        Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#get-a-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
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

    
    def projects_get_card(self, request: operations.ProjectsGetCardRequest) -> operations.ProjectsGetCardResponse:
        r"""Get a project card
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#get-a-project-card - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/cards/{card_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectCard])
                res.project_card = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def projects_get_column(self, request: operations.ProjectsGetColumnRequest) -> operations.ProjectsGetColumnResponse:
        r"""Get a project column
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#get-a-project-column - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetColumnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectColumn])
                res.project_column = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def projects_get_permission_for_user(self, request: operations.ProjectsGetPermissionForUserRequest) -> operations.ProjectsGetPermissionForUserResponse:
        r"""Get project permission for a user
        Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#get-project-permission-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/collaborators/{username}/permission", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetPermissionForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryCollaboratorPermission])
                res.repository_collaborator_permission = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsGetPermissionForUser415ApplicationJSON])
                res.projects_get_permission_for_user_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def projects_list_cards(self, request: operations.ProjectsListCardsRequest) -> operations.ProjectsListCardsResponse:
        r"""List project cards
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-project-cards - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}/cards", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProjectCard]])
                res.project_cards = out
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

    
    def projects_list_collaborators(self, request: operations.ProjectsListCollaboratorsRequest) -> operations.ProjectsListCollaboratorsResponse:
        r"""List project collaborators
        Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-project-collaborators - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/collaborators", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListCollaboratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsListCollaborators415ApplicationJSON])
                res.projects_list_collaborators_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def projects_list_columns(self, request: operations.ProjectsListColumnsRequest) -> operations.ProjectsListColumnsResponse:
        r"""List project columns
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-project-columns - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/columns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListColumnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProjectColumn]])
                res.project_columns = out
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

    
    def projects_list_for_org(self, request: operations.ProjectsListForOrgRequest) -> operations.ProjectsListForOrgResponse:
        r"""List organization projects
        Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-organization-projects - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/projects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_list_for_repo(self, request: operations.ProjectsListForRepoRequest) -> operations.ProjectsListForRepoResponse:
        r"""List repository projects
        Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-repository-projects - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/projects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_list_for_user(self, request: operations.ProjectsListForUserRequest) -> operations.ProjectsListForUserResponse:
        r"""List user projects
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#list-user-projects - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/projects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsListForUser415ApplicationJSON])
                res.projects_list_for_user_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def projects_move_card(self, request: operations.ProjectsMoveCardRequest) -> operations.ProjectsMoveCardResponse:
        r"""Move a project card
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#move-a-project-card - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/cards/{card_id}/moves", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsMoveCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.projects_move_card_201_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsMoveCard403ApplicationJSON])
                res.projects_move_card_403_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsMoveCard503ApplicationJSON])
                res.projects_move_card_503_application_json_object = out

        return res

    
    def projects_move_column(self, request: operations.ProjectsMoveColumnRequest) -> operations.ProjectsMoveColumnResponse:
        r"""Move a project column
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#move-a-project-column - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}/moves", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsMoveColumnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.projects_move_column_201_application_json_object = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_remove_collaborator(self, request: operations.ProjectsRemoveCollaboratorRequest) -> operations.ProjectsRemoveCollaboratorResponse:
        r"""Remove user as a collaborator
        Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#remove-project-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/collaborators/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsRemoveCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsRemoveCollaborator415ApplicationJSON])
                res.projects_remove_collaborator_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def projects_update(self, request: operations.ProjectsUpdateRequest) -> operations.ProjectsUpdateResponse:
        r"""Update a project
        Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#update-a-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ProjectsUpdate403ApplicationJSON])
                res.projects_update_403_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_update_card(self, request: operations.ProjectsUpdateCardRequest) -> operations.ProjectsUpdateCardResponse:
        r"""Update an existing project card
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#update-a-project-card - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/cards/{card_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsUpdateCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectCard])
                res.project_card = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def projects_update_column(self, request: operations.ProjectsUpdateColumnRequest) -> operations.ProjectsUpdateColumnResponse:
        r"""Update an existing project column
        https://docs.github.com/enterprise-server@3.0/rest/reference/projects#update-a-project-column - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/columns/{column_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsUpdateColumnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectColumn])
                res.project_column = out
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

    