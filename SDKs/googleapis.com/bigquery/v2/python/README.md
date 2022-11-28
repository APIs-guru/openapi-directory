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
    
req = operations.BigqueryDatasetsDeleteRequest(
    security=operations.BigqueryDatasetsDeleteSecurity(
        option1=operations.BigqueryDatasetsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.BigqueryDatasetsDeletePathParams(
        dataset_id="libero",
        project_id="dolor",
    ),
    query_params=operations.BigqueryDatasetsDeleteQueryParams(
        alt="json",
        delete_contents=True,
        fields="amet",
        key="aut",
        oauth_token="ea",
        pretty_print=False,
        quota_user="error",
        user_ip="veniam",
    ),
)
    
res = s.datasets.bigquery_datasets_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### datasets

* `bigquery_datasets_delete` - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* `bigquery_datasets_get` - Returns the dataset specified by datasetID.
* `bigquery_datasets_insert` - Creates a new empty dataset.
* `bigquery_datasets_list` - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* `bigquery_datasets_patch` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* `bigquery_datasets_update` - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### jobs

* `bigquery_jobs_cancel` - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* `bigquery_jobs_delete` - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* `bigquery_jobs_get` - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* `bigquery_jobs_get_query_results` - Retrieves the results of a query job.
* `bigquery_jobs_insert` - Starts a new asynchronous job. Requires the Can View project role.
* `bigquery_jobs_list` - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* `bigquery_jobs_query` - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### models

* `bigquery_models_delete` - Deletes the model specified by modelId from the dataset.
* `bigquery_models_get` - Gets the specified model resource by model ID.
* `bigquery_models_list` - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* `bigquery_models_patch` - Patch specific fields in the specified model.

### projects

* `bigquery_projects_get_service_account` - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* `bigquery_projects_list` - Lists all projects to which you have been granted any project role.

### routines

* `bigquery_routines_delete` - Deletes the routine specified by routineId from the dataset.
* `bigquery_routines_get` - Gets the specified routine resource by routine ID.
* `bigquery_routines_insert` - Creates a new routine in the dataset.
* `bigquery_routines_list` - Lists all routines in the specified dataset. Requires the READER dataset role.
* `bigquery_routines_update` - Updates information in an existing routine. The update method replaces the entire Routine resource.

### rowAccessPolicies

* `bigquery_row_access_policies_list` - Lists all row access policies on the specified table.

### tabledata

* `bigquery_tabledata_insert_all` - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* `bigquery_tabledata_list` - Retrieves table data from a specified set of rows. Requires the READER dataset role.

### tables

* `bigquery_tables_delete` - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* `bigquery_tables_get` - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* `bigquery_tables_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `bigquery_tables_insert` - Creates a new, empty table in the dataset.
* `bigquery_tables_list` - Lists all tables in the specified dataset. Requires the READER dataset role.
* `bigquery_tables_patch` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* `bigquery_tables_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `bigquery_tables_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `bigquery_tables_update` - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
