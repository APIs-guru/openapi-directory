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
    
    req := operations.AutomlProjectsLocationsDatasetsCreateRequest{
        Security: operations.AutomlProjectsLocationsDatasetsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AutomlProjectsLocationsDatasetsCreatePathParams{
            Parent: "blanditiis",
        },
        QueryParams: operations.AutomlProjectsLocationsDatasetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "harum",
            Fields: "dolor",
            Key: "quas",
            OauthToken: "maiores",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "ut",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.Dataset{
            CreateTime: "magni",
            Description: "soluta",
            DisplayName: "illum",
            Etag: "recusandae",
            ExampleCount: 5391916244486001381,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "quo": "impedit",
            },
            Name: "nam",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "autem",
                PrimaryTableSpecID: "ut",
                StatsUpdateTime: "cum",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "numquam": shared.CorrelationStats{
                        CramersV: 18.200001,
                    },
                    "aut": shared.CorrelationStats{
                        CramersV: 49.099998,
                    },
                    "modi": shared.CorrelationStats{
                        CramersV: 72.199997,
                    },
                },
                TargetColumnSpecID: "molestias",
                WeightColumnSpecID: "quis",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "velit": "ab",
                "commodi": "deleniti",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 6177023907365275257,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "ad",
                TargetLanguageCode: "vitae",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "quae": "sunt",
                "tempore": "ratione",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "dolores": "eligendi",
            },
        },
    }
    
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `AutomlProjectsLocationsDatasetsCreate` - Creates a dataset.
* `AutomlProjectsLocationsDatasetsExportData` - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsDatasetsImportData` - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsDatasetsList` - Lists datasets in a project.
* `AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList` - Lists column specs in a table spec.
* `AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch` - Updates a column spec.
* `AutomlProjectsLocationsDatasetsTableSpecsList` - Lists table specs in a dataset.
* `AutomlProjectsLocationsList` - Lists information about the supported locations for this service.
* `AutomlProjectsLocationsModelsBatchPredict` - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* `AutomlProjectsLocationsModelsCreate` - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* `AutomlProjectsLocationsModelsDeploy` - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsExport` - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsExportEvaluatedExamples` - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `AutomlProjectsLocationsModelsList` - Lists models.
* `AutomlProjectsLocationsModelsModelEvaluationsList` - Lists model evaluations.
* `AutomlProjectsLocationsModelsPredict` - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* `AutomlProjectsLocationsModelsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `AutomlProjectsLocationsModelsUndeploy` - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `AutomlProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `AutomlProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AutomlProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `AutomlProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `AutomlProjectsLocationsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
