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
    
    req := operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest{
        Security: operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListPathParams{
            Name: "laudantium",
        },
        QueryParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "json",
            Callback: "ut",
            Fields: "sit",
            Filter: "ut",
            Key: "ut",
            OauthToken: "iure",
            PageSize: 3283828698667265771,
            PageToken: "natus",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "voluptatem",
            UploadProtocol: "iure",
        },
    }
    
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsOperationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `AssuredworkloadsOrganizationsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `AssuredworkloadsOrganizationsLocationsWorkloadsCreate` - Creates Assured Workload.
* `AssuredworkloadsOrganizationsLocationsWorkloadsDelete` - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
* `AssuredworkloadsOrganizationsLocationsWorkloadsList` - Lists Assured Workloads under a CRM Node.
* `AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove` - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
* `AssuredworkloadsOrganizationsLocationsWorkloadsPatch` - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* `AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources` - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* `AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge` - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* `AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet` - Retrieves Assured Workload Violation based on ID.
* `AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList` - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

### projects

* `AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove` - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
