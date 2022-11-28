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
     * artifactregistryProjectsLocationsRepositoriesAptArtifactsImport - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
    **/
    artifactregistryProjectsLocationsRepositoriesAptArtifactsImport(req: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
    **/
    artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload(req: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesCreate - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
    **/
    artifactregistryProjectsLocationsRepositoriesCreate(req: operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesDockerImagesList - Lists docker images.
    **/
    artifactregistryProjectsLocationsRepositoriesDockerImagesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesFilesList - Lists files.
    **/
    artifactregistryProjectsLocationsRepositoriesFilesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesGetIamPolicy - Gets the IAM policy for a given resource.
    **/
    artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
    **/
    artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload(req: operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesList - Lists repositories.
    **/
    artifactregistryProjectsLocationsRepositoriesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesMavenArtifactsList - Lists maven artifacts.
    **/
    artifactregistryProjectsLocationsRepositoriesMavenArtifactsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesNpmPackagesList - Lists npm packages.
    **/
    artifactregistryProjectsLocationsRepositoriesNpmPackagesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse>;
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
     * artifactregistryProjectsLocationsRepositoriesPackagesVersionsList - Lists versions.
    **/
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPythonPackagesGet - Gets a python package.
    **/
    artifactregistryProjectsLocationsRepositoriesPythonPackagesGet(req: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesPythonPackagesList - Lists python packages.
    **/
    artifactregistryProjectsLocationsRepositoriesPythonPackagesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesSetIamPolicy - Updates the IAM policy for a given resource.
    **/
    artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesTestIamPermissions - Tests if the caller has a list of permissions on a resource.
    **/
    artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesYumArtifactsImport - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
    **/
    artifactregistryProjectsLocationsRepositoriesYumArtifactsImport(req: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse>;
    /**
     * artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
    **/
    artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload(req: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse>;
}
