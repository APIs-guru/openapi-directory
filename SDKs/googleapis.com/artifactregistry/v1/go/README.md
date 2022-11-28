# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ArtifactregistryProjectsLocationsListRequest{
        Security: operations.ArtifactregistryProjectsLocationsListSecurity{
            Option1: &operations.ArtifactregistryProjectsLocationsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ArtifactregistryProjectsLocationsListPathParams{
            Name: "eveniet",
        },
        QueryParams: operations.ArtifactregistryProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "nemo",
            Fields: "beatae",
            Filter: "quasi",
            Key: "enim",
            OauthToken: "officiis",
            PageSize: 7882563424506132252,
            PageToken: "sit",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "facilis",
            UploadProtocol: "sunt",
        },
    }
    
    res, err := s.Projects.ArtifactregistryProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ArtifactregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport` - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload` - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesCreate` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `ArtifactregistryProjectsLocationsRepositoriesDockerImagesList` - Lists docker images.
* `ArtifactregistryProjectsLocationsRepositoriesFilesList` - Lists files.
* `ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy` - Gets the IAM policy for a given resource.
* `ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload` - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* `ArtifactregistryProjectsLocationsRepositoriesList` - Lists repositories.
* `ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsList` - Lists maven artifacts.
* `ArtifactregistryProjectsLocationsRepositoriesNpmPackagesList` - Lists npm packages.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesList` - Lists packages.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate` - Creates a tag.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList` - Lists tags.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch` - Updates a tag.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList` - Lists versions.
* `ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGet` - Gets a python package.
* `ArtifactregistryProjectsLocationsRepositoriesPythonPackagesList` - Lists python packages.
* `ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy` - Updates the IAM policy for a given resource.
* `ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions` - Tests if the caller has a list of permissions on a resource.
* `ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport` - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload` - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
