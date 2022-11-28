

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://circleci.com/api/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_project_username_project_build_cache(self, request: operations.DeleteProjectUsernameProjectBuildCacheRequest) -> operations.DeleteProjectUsernameProjectBuildCacheResponse:
        r"""Clears the cache for a project.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/build-cache", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectBuildCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectBuildCache200ApplicationJSON])
                res.delete_project_username_project_build_cache_200_application_json_object = out

        return res

    
    def delete_project_username_project_checkout_key_fingerprint_(self, request: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest) -> operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse:
        r"""Delete a checkout key.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key/{fingerprint}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON])
                res.delete_project_username_project_checkout_key_fingerprint_200_application_json_object = out

        return res

    
    def delete_project_username_project_envvar_name_(self, request: operations.DeleteProjectUsernameProjectEnvvarNameRequest) -> operations.DeleteProjectUsernameProjectEnvvarNameResponse:
        r"""Deletes the environment variable named ':name'
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectEnvvarNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectEnvvarName200ApplicationJSON])
                res.delete_project_username_project_envvar_name_200_application_json_object = out

        return res

    
    def get_me(self) -> operations.GetMeResponse:
        r"""Provides information about the signed in user.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def get_project_username_project_(self, request: operations.GetProjectUsernameProjectRequest) -> operations.GetProjectUsernameProjectResponse:
        r"""Build summary for each of the last 30 builds for a single git repo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Build]])
                res.builds = out

        return res

    
    def get_project_username_project_build_num_(self, request: operations.GetProjectUsernameProjectBuildNumRequest) -> operations.GetProjectUsernameProjectBuildNumResponse:
        r"""Full details for a single build. The response includes all of the fields from the build summary.
        This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildDetail])
                res.build_detail = out

        return res

    
    def get_project_username_project_build_num_artifacts(self, request: operations.GetProjectUsernameProjectBuildNumArtifactsRequest) -> operations.GetProjectUsernameProjectBuildNumArtifactsResponse:
        r"""List the artifacts produced by a given build.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/artifacts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Artifact]])
                res.artifacts = out

        return res

    
    def get_project_username_project_build_num_tests(self, request: operations.GetProjectUsernameProjectBuildNumTestsRequest) -> operations.GetProjectUsernameProjectBuildNumTestsResponse:
        r"""Provides test metadata for a build
        Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/tests", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumTestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tests])
                res.tests = out

        return res

    
    def get_project_username_project_checkout_key(self, request: operations.GetProjectUsernameProjectCheckoutKeyRequest) -> operations.GetProjectUsernameProjectCheckoutKeyResponse:
        r"""Lists checkout keys.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectCheckoutKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Key]])
                res.keys = out

        return res

    
    def get_project_username_project_checkout_key_fingerprint_(self, request: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest) -> operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse:
        r"""Get a checkout key.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key/{fingerprint}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out

        return res

    
    def get_project_username_project_envvar(self, request: operations.GetProjectUsernameProjectEnvvarRequest) -> operations.GetProjectUsernameProjectEnvvarResponse:
        r"""Lists the environment variables for :project
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectEnvvarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Envvar]])
                res.envvars = out

        return res

    
    def get_project_username_project_envvar_name_(self, request: operations.GetProjectUsernameProjectEnvvarNameRequest) -> operations.GetProjectUsernameProjectEnvvarNameResponse:
        r"""Gets the hidden value of environment variable :name
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectEnvvarNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Envvar])
                res.envvar = out

        return res

    
    def get_projects(self) -> operations.GetProjectsResponse:
        r"""List of all the projects you're following on CircleCI, with build information organized by branch.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out

        return res

    
    def get_recent_builds(self, request: operations.GetRecentBuildsRequest) -> operations.GetRecentBuildsResponse:
        r"""Build summary for each of the last 30 recent builds, ordered by build_num.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recent-builds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecentBuildsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Build]])
                res.builds = out

        return res

    
    def post_project_username_project_(self, request: operations.PostProjectUsernameProjectRequest) -> operations.PostProjectUsernameProjectResponse:
        r"""Triggers a new build, returns a summary of the build.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSummary])
                res.build_summary = out

        return res

    
    def post_project_username_project_build_num_cancel(self, request: operations.PostProjectUsernameProjectBuildNumCancelRequest) -> operations.PostProjectUsernameProjectBuildNumCancelResponse:
        r"""Cancels the build, returns a summary of the build.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectBuildNumCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def post_project_username_project_build_num_retry(self, request: operations.PostProjectUsernameProjectBuildNumRetryRequest) -> operations.PostProjectUsernameProjectBuildNumRetryResponse:
        r"""Retries the build, returns a summary of the new build.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/retry", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectBuildNumRetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def post_project_username_project_checkout_key(self, request: operations.PostProjectUsernameProjectCheckoutKeyRequest) -> operations.PostProjectUsernameProjectCheckoutKeyResponse:
        r"""Creates a new checkout key.
        Only usable with a user API token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectCheckoutKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out

        return res

    
    def post_project_username_project_envvar(self, request: operations.PostProjectUsernameProjectEnvvarRequest) -> operations.PostProjectUsernameProjectEnvvarResponse:
        r"""Creates a new environment variable
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectEnvvarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Envvar])
                res.envvar = out

        return res

    
    def post_project_username_project_ssh_key(self, request: operations.PostProjectUsernameProjectSSHKeyRequest) -> operations.PostProjectUsernameProjectSSHKeyResponse:
        r"""Create an ssh key used to access external systems that require SSH key-based authentication
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/ssh-key", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostProjectUsernameProjectSSHKeyDefaultApplicationJSON])
                res.post_project_username_project_ssh_key_default_application_json_object = out

        return res

    
    def post_project_username_project_tree_branch_(self, request: operations.PostProjectUsernameProjectTreeBranchRequest) -> operations.PostProjectUsernameProjectTreeBranchResponse:
        r"""Triggers a new build, returns a summary of the build.
        Optional build parameters can be set using an experimental API.
        
        Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/project/{username}/{project}/tree/{branch}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectTreeBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def post_user_heroku_key(self) -> operations.PostUserHerokuKeyResponse:
        r"""Adds your Heroku API key to CircleCI, takes apikey as form param name.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/heroku-key"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserHerokuKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUserHerokuKey403ApplicationJSON])
                res.post_user_heroku_key_403_application_json_object = out

        return res

    