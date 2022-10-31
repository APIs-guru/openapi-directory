import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://circleci.com/api/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def delete_project_username_project_build_cache(self, request: operations.DeleteProjectUsernameProjectBuildCacheRequest) -> operations.DeleteProjectUsernameProjectBuildCacheResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/build-cache", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectBuildCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectBuildCache200ApplicationJSON])
                res.delete_project_username_project_build_cache_200_application_json_object = out

        return res

    
    def delete_project_username_project_checkout_key_fingerprint_(self, request: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest) -> operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key/{fingerprint}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON])
                res.delete_project_username_project_checkout_key_fingerprint_200_application_json_object = out

        return res

    
    def delete_project_username_project_envvar_name_(self, request: operations.DeleteProjectUsernameProjectEnvvarNameRequest) -> operations.DeleteProjectUsernameProjectEnvvarNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar/{name}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectUsernameProjectEnvvarNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProjectUsernameProjectEnvvarName200ApplicationJSON])
                res.delete_project_username_project_envvar_name_200_application_json_object = out

        return res

    
    def get_me(self) -> operations.GetMeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/me"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def get_project_username_project_(self, request: operations.GetProjectUsernameProjectRequest) -> operations.GetProjectUsernameProjectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Build]])
                res.builds = out

        return res

    
    def get_project_username_project_build_num_(self, request: operations.GetProjectUsernameProjectBuildNumRequest) -> operations.GetProjectUsernameProjectBuildNumResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildDetail])
                res.build_detail = out

        return res

    
    def get_project_username_project_build_num_artifacts(self, request: operations.GetProjectUsernameProjectBuildNumArtifactsRequest) -> operations.GetProjectUsernameProjectBuildNumArtifactsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/artifacts", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Artifact]])
                res.artifacts = out

        return res

    
    def get_project_username_project_build_num_tests(self, request: operations.GetProjectUsernameProjectBuildNumTestsRequest) -> operations.GetProjectUsernameProjectBuildNumTestsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/tests", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectBuildNumTestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tests])
                res.tests = out

        return res

    
    def get_project_username_project_checkout_key(self, request: operations.GetProjectUsernameProjectCheckoutKeyRequest) -> operations.GetProjectUsernameProjectCheckoutKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectCheckoutKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Key]])
                res.keys = out

        return res

    
    def get_project_username_project_checkout_key_fingerprint_(self, request: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest) -> operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key/{fingerprint}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out

        return res

    
    def get_project_username_project_envvar(self, request: operations.GetProjectUsernameProjectEnvvarRequest) -> operations.GetProjectUsernameProjectEnvvarResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectEnvvarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Envvar]])
                res.envvars = out

        return res

    
    def get_project_username_project_envvar_name_(self, request: operations.GetProjectUsernameProjectEnvvarNameRequest) -> operations.GetProjectUsernameProjectEnvvarNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar/{name}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUsernameProjectEnvvarNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Envvar])
                res.envvar = out

        return res

    
    def get_projects(self) -> operations.GetProjectsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/projects"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out

        return res

    
    def get_recent_builds(self, request: operations.GetRecentBuildsRequest) -> operations.GetRecentBuildsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/recent-builds"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecentBuildsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Build]])
                res.builds = out

        return res

    
    def post_project_username_project_(self, request: operations.PostProjectUsernameProjectRequest) -> operations.PostProjectUsernameProjectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSummary])
                res.build_summary = out

        return res

    
    def post_project_username_project_build_num_cancel(self, request: operations.PostProjectUsernameProjectBuildNumCancelRequest) -> operations.PostProjectUsernameProjectBuildNumCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/cancel", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectBuildNumCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def post_project_username_project_build_num_retry(self, request: operations.PostProjectUsernameProjectBuildNumRetryRequest) -> operations.PostProjectUsernameProjectBuildNumRetryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/{build_num}/retry", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectBuildNumRetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def post_project_username_project_checkout_key(self, request: operations.PostProjectUsernameProjectCheckoutKeyRequest) -> operations.PostProjectUsernameProjectCheckoutKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/checkout-key", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectCheckoutKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out

        return res

    
    def post_project_username_project_envvar(self, request: operations.PostProjectUsernameProjectEnvvarRequest) -> operations.PostProjectUsernameProjectEnvvarResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/envvar", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectEnvvarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Envvar])
                res.envvar = out

        return res

    
    def post_project_username_project_ssh_key(self, request: operations.PostProjectUsernameProjectSSHKeyRequest) -> operations.PostProjectUsernameProjectSSHKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/ssh-key", request.path_params)

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProjectUsernameProjectSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostProjectUsernameProjectSSHKeyDefaultApplicationJSON])
                res.post_project_username_project_ssh_key_default_application_json_object = out

        return res

    
    def post_project_username_project_tree_branch_(self, request: operations.PostProjectUsernameProjectTreeBranchRequest) -> operations.PostProjectUsernameProjectTreeBranchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/project/{username}/{project}/tree/{branch}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/heroku-key"

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserHerokuKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUserHerokuKey403ApplicationJSON])
                res.post_user_heroku_key_403_application_json_object = out

        return res

    