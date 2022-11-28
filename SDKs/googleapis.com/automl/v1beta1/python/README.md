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
    
req = operations.AutomlProjectsLocationsDatasetsCreateRequest(
    security=operations.AutomlProjectsLocationsDatasetsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AutomlProjectsLocationsDatasetsCreatePathParams(
        parent="blanditiis",
    ),
    query_params=operations.AutomlProjectsLocationsDatasetsCreateQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="json",
        callback="harum",
        fields="dolor",
        key="quas",
        oauth_token="maiores",
        pretty_print=False,
        quota_user="est",
        upload_type="ut",
        upload_protocol="voluptatem",
    ),
    request=shared.Dataset(
        create_time="magni",
        description="soluta",
        display_name="illum",
        etag="recusandae",
        example_count=5391916244486001381,
        image_classification_dataset_metadata=shared.ImageClassificationDatasetMetadata(
            classification_type="MULTICLASS",
        ),
        image_object_detection_dataset_metadata={
            "quo": "impedit",
        },
        name="nam",
        tables_dataset_metadata=shared.TablesDatasetMetadata(
            ml_use_column_spec_id="autem",
            primary_table_spec_id="ut",
            stats_update_time="cum",
            target_column_correlations={
                "numquam": shared.CorrelationStats(
                    cramers_v=18.200001,
                ),
                "aut": shared.CorrelationStats(
                    cramers_v=49.099998,
                ),
                "modi": shared.CorrelationStats(
                    cramers_v=72.199997,
                ),
            },
            target_column_spec_id="molestias",
            weight_column_spec_id="quis",
        ),
        text_classification_dataset_metadata=shared.TextClassificationDatasetMetadata(
            classification_type="MULTICLASS",
        ),
        text_extraction_dataset_metadata={
            "velit": "ab",
            "commodi": "deleniti",
        },
        text_sentiment_dataset_metadata=shared.TextSentimentDatasetMetadata(
            sentiment_max=6177023907365275257,
        ),
        translation_dataset_metadata=shared.TranslationDatasetMetadata(
            source_language_code="ad",
            target_language_code="vitae",
        ),
        video_classification_dataset_metadata={
            "quae": "sunt",
            "tempore": "ratione",
        },
        video_object_tracking_dataset_metadata={
            "dolores": "eligendi",
        },
    ),
)
    
res = s.projects.automl_projects_locations_datasets_create(req)

if res.dataset is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `automl_projects_locations_datasets_create` - Creates a dataset.
* `automl_projects_locations_datasets_export_data` - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* `automl_projects_locations_datasets_import_data` - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* `automl_projects_locations_datasets_list` - Lists datasets in a project.
* `automl_projects_locations_datasets_table_specs_column_specs_list` - Lists column specs in a table spec.
* `automl_projects_locations_datasets_table_specs_column_specs_patch` - Updates a column spec.
* `automl_projects_locations_datasets_table_specs_list` - Lists table specs in a dataset.
* `automl_projects_locations_list` - Lists information about the supported locations for this service.
* `automl_projects_locations_models_batch_predict` - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* `automl_projects_locations_models_create` - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* `automl_projects_locations_models_deploy` - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `automl_projects_locations_models_export` - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* `automl_projects_locations_models_export_evaluated_examples` - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* `automl_projects_locations_models_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `automl_projects_locations_models_list` - Lists models.
* `automl_projects_locations_models_model_evaluations_list` - Lists model evaluations.
* `automl_projects_locations_models_predict` - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* `automl_projects_locations_models_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `automl_projects_locations_models_undeploy` - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `automl_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `automl_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `automl_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `automl_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `automl_projects_locations_operations_wait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `automl_projects_locations_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
