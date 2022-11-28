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
import { BigqueryDatasetsDeleteRequest, BigqueryDatasetsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BigqueryDatasetsDeleteRequest = {
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
    datasetId: "libero",
    projectId: "dolor",
  },
  queryParams: {
    alt: "json",
    deleteContents: true,
    fields: "amet",
    key: "aut",
    oauthToken: "ea",
    prettyPrint: false,
    quotaUser: "error",
    userIp: "veniam",
  },
};

sdk.datasets.bigqueryDatasetsDelete(req).then((res: BigqueryDatasetsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### datasets

* `bigqueryDatasetsDelete` - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* `bigqueryDatasetsGet` - Returns the dataset specified by datasetID.
* `bigqueryDatasetsInsert` - Creates a new empty dataset.
* `bigqueryDatasetsList` - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* `bigqueryDatasetsPatch` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* `bigqueryDatasetsUpdate` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### jobs

* `bigqueryJobsCancel` - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* `bigqueryJobsDelete` - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* `bigqueryJobsGet` - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* `bigqueryJobsGetQueryResults` - Retrieves the results of a query job.
* `bigqueryJobsInsert` - Starts a new asynchronous job. Requires the Can View project role.
* `bigqueryJobsList` - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* `bigqueryJobsQuery` - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### models

* `bigqueryModelsDelete` - Deletes the model specified by modelId from the dataset.
* `bigqueryModelsGet` - Gets the specified model resource by model ID.
* `bigqueryModelsList` - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* `bigqueryModelsPatch` - Patch specific fields in the specified model.

### projects

* `bigqueryProjectsGetServiceAccount` - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* `bigqueryProjectsList` - Lists all projects to which you have been granted any project role.

### routines

* `bigqueryRoutinesDelete` - Deletes the routine specified by routineId from the dataset.
* `bigqueryRoutinesGet` - Gets the specified routine resource by routine ID.
* `bigqueryRoutinesInsert` - Creates a new routine in the dataset.
* `bigqueryRoutinesList` - Lists all routines in the specified dataset. Requires the READER dataset role.
* `bigqueryRoutinesUpdate` - Updates information in an existing routine. The update method replaces the entire Routine resource.

### rowAccessPolicies

* `bigqueryRowAccessPoliciesList` - Lists all row access policies on the specified table.

### tabledata

* `bigqueryTabledataInsertAll` - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* `bigqueryTabledataList` - Retrieves table data from a specified set of rows. Requires the READER dataset role.

### tables

* `bigqueryTablesDelete` - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* `bigqueryTablesGet` - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* `bigqueryTablesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `bigqueryTablesInsert` - Creates a new, empty table in the dataset.
* `bigqueryTablesList` - Lists all tables in the specified dataset. Requires the READER dataset role.
* `bigqueryTablesPatch` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* `bigqueryTablesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `bigqueryTablesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `bigqueryTablesUpdate` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
