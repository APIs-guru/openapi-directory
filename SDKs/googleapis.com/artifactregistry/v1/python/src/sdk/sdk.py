import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://artifactregistry.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def artifactregistry_projects_locations_list(self, request: operations.ArtifactregistryProjectsLocationsListRequest) -> operations.ArtifactregistryProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_apt_artifacts_import(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/aptArtifacts:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_apt_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/aptArtifacts:create", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadAptArtifactMediaResponse])
                res.upload_apt_artifact_media_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_create(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/repositories", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_docker_images_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/dockerImages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDockerImagesResponse])
                res.list_docker_images_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_files_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/files", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilesResponse])
                res.list_files_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_get_iam_policy(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def artifactregistry_projects_locations_repositories_kfp_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/kfpArtifacts:create", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadKfpArtifactMediaResponse])
                res.upload_kfp_artifact_media_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/repositories", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRepositoriesResponse])
                res.list_repositories_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_maven_artifacts_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/mavenArtifacts", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMavenArtifactsResponse])
                res.list_maven_artifacts_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_npm_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/npmPackages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNpmPackagesResponse])
                res.list_npm_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/packages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPackagesResponse])
                res.list_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_create(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_patch(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_versions_delete(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_versions_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionsResponse])
                res.list_versions_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_python_packages_get(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PythonPackage])
                res.python_package = out

        return res

    
    def artifactregistry_projects_locations_repositories_python_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/pythonPackages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPythonPackagesResponse])
                res.list_python_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_set_iam_policy(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def artifactregistry_projects_locations_repositories_test_iam_permissions(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_yum_artifacts_import(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/yumArtifacts:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_yum_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/yumArtifacts:create", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadYumArtifactMediaResponse])
                res.upload_yum_artifact_media_response = out

        return res

    