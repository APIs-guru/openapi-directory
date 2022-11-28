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
    
    req := operations.BigqueryDatasetsDeleteRequest{
        Security: operations.BigqueryDatasetsDeleteSecurity{
            Option1: &operations.BigqueryDatasetsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.BigqueryDatasetsDeletePathParams{
            DatasetID: "libero",
            ProjectID: "dolor",
        },
        QueryParams: operations.BigqueryDatasetsDeleteQueryParams{
            Alt: "json",
            DeleteContents: true,
            Fields: "amet",
            Key: "aut",
            OauthToken: "ea",
            PrettyPrint: false,
            QuotaUser: "error",
            UserIP: "veniam",
        },
    }
    
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### datasets

* `BigqueryDatasetsDelete` - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* `BigqueryDatasetsGet` - Returns the dataset specified by datasetID.
* `BigqueryDatasetsInsert` - Creates a new empty dataset.
* `BigqueryDatasetsList` - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* `BigqueryDatasetsPatch` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* `BigqueryDatasetsUpdate` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### jobs

* `BigqueryJobsCancel` - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* `BigqueryJobsDelete` - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* `BigqueryJobsGet` - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* `BigqueryJobsGetQueryResults` - Retrieves the results of a query job.
* `BigqueryJobsInsert` - Starts a new asynchronous job. Requires the Can View project role.
* `BigqueryJobsList` - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* `BigqueryJobsQuery` - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### models

* `BigqueryModelsDelete` - Deletes the model specified by modelId from the dataset.
* `BigqueryModelsGet` - Gets the specified model resource by model ID.
* `BigqueryModelsList` - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* `BigqueryModelsPatch` - Patch specific fields in the specified model.

### projects

* `BigqueryProjectsGetServiceAccount` - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* `BigqueryProjectsList` - Lists all projects to which you have been granted any project role.

### routines

* `BigqueryRoutinesDelete` - Deletes the routine specified by routineId from the dataset.
* `BigqueryRoutinesGet` - Gets the specified routine resource by routine ID.
* `BigqueryRoutinesInsert` - Creates a new routine in the dataset.
* `BigqueryRoutinesList` - Lists all routines in the specified dataset. Requires the READER dataset role.
* `BigqueryRoutinesUpdate` - Updates information in an existing routine. The update method replaces the entire Routine resource.

### rowAccessPolicies

* `BigqueryRowAccessPoliciesList` - Lists all row access policies on the specified table.

### tabledata

* `BigqueryTabledataInsertAll` - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* `BigqueryTabledataList` - Retrieves table data from a specified set of rows. Requires the READER dataset role.

### tables

* `BigqueryTablesDelete` - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* `BigqueryTablesGet` - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* `BigqueryTablesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BigqueryTablesInsert` - Creates a new, empty table in the dataset.
* `BigqueryTablesList` - Lists all tables in the specified dataset. Requires the READER dataset role.
* `BigqueryTablesPatch` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* `BigqueryTablesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BigqueryTablesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `BigqueryTablesUpdate` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
