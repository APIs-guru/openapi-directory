import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * artifactregistryProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    artifactregistryProjectsLocationsList(req: operations.ArtifactregistryProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesCreate - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
    **/
    artifactregistryProjectsLocationsRepositoriesCreate(req: operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesFilesList - Lists files.
    **/
    artifactregistryProjectsLocationsRepositoriesFilesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesGetIamPolicy - Gets the IAM policy for a given resource.
    **/
    artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesList - Lists repositories.
    **/
    artifactregistryProjectsLocationsRepositoriesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesList - Lists packages.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate - Creates a tag.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesTagsList - Lists tags.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesTagsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch - Updates a tag.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet - Gets a version
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPackagesVersionsList - Lists versions.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesSetIamPolicy - Updates the IAM policy for a given resource.
    **/
    artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesTestIamPermissions - Tests if the caller has a list of permissions on a resource.
    **/
    artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse>;
}
