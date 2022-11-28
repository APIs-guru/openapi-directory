# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ArtifactregistryProjectsLocationsListRequest(
    security=operations.ArtifactregistryProjectsLocationsListSecurity(
        option1=operations.ArtifactregistryProjectsLocationsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ArtifactregistryProjectsLocationsListPathParams(
        name="eveniet",
    ),
    query_params=operations.ArtifactregistryProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="rerum",
        alt="json",
        callback="nemo",
        fields="beatae",
        filter="quasi",
        key="enim",
        oauth_token="officiis",
        page_size=7882563424506132252,
        page_token="sit",
        pretty_print=True,
        quota_user="ut",
        upload_type="facilis",
        upload_protocol="sunt",
    ),
)
    
res = s.projects.artifactregistry_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `artifactregistry_projects_locations_list` - Lists information about the supported locations for this service.
* `artifactregistry_projects_locations_repositories_apt_artifacts_import` - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistry_projects_locations_repositories_apt_artifacts_upload` - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistry_projects_locations_repositories_create` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `artifactregistry_projects_locations_repositories_docker_images_list` - Lists docker images.
* `artifactregistry_projects_locations_repositories_files_list` - Lists files.
* `artifactregistry_projects_locations_repositories_get_iam_policy` - Gets the IAM policy for a given resource.
* `artifactregistry_projects_locations_repositories_kfp_artifacts_upload` - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* `artifactregistry_projects_locations_repositories_list` - Lists repositories.
* `artifactregistry_projects_locations_repositories_maven_artifacts_list` - Lists maven artifacts.
* `artifactregistry_projects_locations_repositories_npm_packages_list` - Lists npm packages.
* `artifactregistry_projects_locations_repositories_packages_list` - Lists packages.
* `artifactregistry_projects_locations_repositories_packages_tags_create` - Creates a tag.
* `artifactregistry_projects_locations_repositories_packages_tags_list` - Lists tags.
* `artifactregistry_projects_locations_repositories_packages_tags_patch` - Updates a tag.
* `artifactregistry_projects_locations_repositories_packages_versions_delete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `artifactregistry_projects_locations_repositories_packages_versions_list` - Lists versions.
* `artifactregistry_projects_locations_repositories_python_packages_get` - Gets a python package.
* `artifactregistry_projects_locations_repositories_python_packages_list` - Lists python packages.
* `artifactregistry_projects_locations_repositories_set_iam_policy` - Updates the IAM policy for a given resource.
* `artifactregistry_projects_locations_repositories_test_iam_permissions` - Tests if the caller has a list of permissions on a resource.
* `artifactregistry_projects_locations_repositories_yum_artifacts_import` - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistry_projects_locations_repositories_yum_artifacts_upload` - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
