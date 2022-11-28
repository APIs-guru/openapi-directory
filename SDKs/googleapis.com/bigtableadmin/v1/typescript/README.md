# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BigtableadminOperationsCancelRequest, BigtableadminOperationsCancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BigtableadminOperationsCancelRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    name: "repudiandae",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "vitae",
    alt: "json",
    callback: "dolor",
    fields: "maxime",
    key: "similique",
    oauthToken: "iste",
    prettyPrint: false,
    quotaUser: "voluptate",
    uploadType: "dolorem",
    uploadProtocol: "nihil",
  },
};

sdk.operations.bigtableadminOperationsCancel(req).then((res: BigtableadminOperationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `bigtableadminOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `bigtableadminOperationsProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `bigtableadminProjectsInstancesAppProfilesCreate` - Creates an app profile within an instance.
* `bigtableadminProjectsInstancesAppProfilesList` - Lists information about app profiles in an instance.
* `bigtableadminProjectsInstancesClustersBackupsCreate` - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* `bigtableadminProjectsInstancesClustersBackupsList` - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* `bigtableadminProjectsInstancesClustersBackupsPatch` - Updates a pending or completed Cloud Bigtable Backup.
* `bigtableadminProjectsInstancesClustersCreate` - Creates a cluster within an instance.
* `bigtableadminProjectsInstancesClustersList` - Lists information about clusters in an instance.
* `bigtableadminProjectsInstancesClustersUpdate` - Updates a cluster within an instance. UpdateCluster is deprecated. Please use PartialUpdateCluster instead.
* `bigtableadminProjectsInstancesCreate` - Create an instance within a project.
* `bigtableadminProjectsInstancesList` - Lists information about instances in a project.
* `bigtableadminProjectsInstancesTablesCheckConsistency` - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* `bigtableadminProjectsInstancesTablesCreate` - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* `bigtableadminProjectsInstancesTablesDelete` - Permanently deletes a specified table and all of its data.
* `bigtableadminProjectsInstancesTablesDropRowRange` - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* `bigtableadminProjectsInstancesTablesGenerateConsistencyToken` - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* `bigtableadminProjectsInstancesTablesGetIamPolicy` - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* `bigtableadminProjectsInstancesTablesList` - Lists all tables served from a specified instance.
* `bigtableadminProjectsInstancesTablesModifyColumnFamilies` - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* `bigtableadminProjectsInstancesTablesRestore` - Create a new table by restoring from a completed backup. The new table must be in the same project as the instance containing the backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* `bigtableadminProjectsInstancesTablesSetIamPolicy` - Sets the access control policy on a Table resource. Replaces any existing policy.
* `bigtableadminProjectsInstancesTablesTestIamPermissions` - Returns permissions that the caller has on the specified table resource.
* `bigtableadminProjectsLocationsGet` - Gets information about a location.
* `bigtableadminProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
