import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Workspaces:
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

    
    def all_workspaces(self) -> operations.AllWorkspacesResponse:
        r"""All workspaces
        The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.
        
        The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workspaces"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllWorkspaces200ApplicationJSON])
                res.all_workspaces_200_application_json_object = out

        return res

    
    def create_workspace(self, request: operations.CreateWorkspaceRequest) -> operations.CreateWorkspaceResponse:
        r"""Create Workspace
        This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
        
        On successful creation of the workspace, the response returns the workspcae `name` and `id`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workspaces"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateWorkspace200ApplicationJSON])
                res.create_workspace_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateWorkspace400ApplicationJSON])
                res.create_workspace_400_application_json_object = out

        return res

    
    def delete_workspace(self, request: operations.DeleteWorkspaceRequest) -> operations.DeleteWorkspaceResponse:
        r"""Delete Workspace
        This endpoint allows you to delete an existing workspace.
        
        On successful deletion of the workspace, the response returns the `id`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteWorkspace200ApplicationJSON])
                res.delete_workspace_200_application_json_object = out

        return res

    
    def single_workspace(self, request: operations.SingleWorkspaceRequest) -> operations.SingleWorkspaceResponse:
        r"""Single workspace
        Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleWorkspace200ApplicationJSON])
                res.single_workspace_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleWorkspace404ApplicationJSON])
                res.single_workspace_404_application_json_object = out

        return res

    
    def update_workspace(self, request: operations.UpdateWorkspaceRequest) -> operations.UpdateWorkspaceResponse:
        r"""Update Workspace
        This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
        
        On successful updation of the workspace, the response returns the workspcae `name` and `id`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        
        **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.
        
        For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateWorkspace200ApplicationJSON])
                res.update_workspace_200_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateWorkspace403ApplicationJSON])
                res.update_workspace_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateWorkspace404ApplicationJSON])
                res.update_workspace_404_application_json_object = out

        return res

    