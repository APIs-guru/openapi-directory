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
     * automlProjectsLocationsDatasetsCreate - Creates a dataset.
    **/
    automlProjectsLocationsDatasetsCreate(req: operations.AutomlProjectsLocationsDatasetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsCreateResponse>;
    /**
     * automlProjectsLocationsDatasetsExportData - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsDatasetsExportData(req: operations.AutomlProjectsLocationsDatasetsExportDataRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsExportDataResponse>;
    /**
     * automlProjectsLocationsDatasetsImportData - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsDatasetsImportData(req: operations.AutomlProjectsLocationsDatasetsImportDataRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsImportDataResponse>;
    /**
     * automlProjectsLocationsDatasetsList - Lists datasets in a project.
    **/
    automlProjectsLocationsDatasetsList(req: operations.AutomlProjectsLocationsDatasetsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsListResponse>;
    /**
     * automlProjectsLocationsDatasetsTableSpecsColumnSpecsList - Lists column specs in a table spec.
    **/
    automlProjectsLocationsDatasetsTableSpecsColumnSpecsList(req: operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListResponse>;
    /**
     * automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch - Updates a column spec.
    **/
    automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch(req: operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchResponse>;
    /**
     * automlProjectsLocationsDatasetsTableSpecsList - Lists table specs in a dataset.
    **/
    automlProjectsLocationsDatasetsTableSpecsList(req: operations.AutomlProjectsLocationsDatasetsTableSpecsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsDatasetsTableSpecsListResponse>;
    /**
     * automlProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    automlProjectsLocationsList(req: operations.AutomlProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsListResponse>;
    /**
     * automlProjectsLocationsModelsBatchPredict - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
    **/
    automlProjectsLocationsModelsBatchPredict(req: operations.AutomlProjectsLocationsModelsBatchPredictRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsBatchPredictResponse>;
    /**
     * automlProjectsLocationsModelsCreate - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
    **/
    automlProjectsLocationsModelsCreate(req: operations.AutomlProjectsLocationsModelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsCreateResponse>;
    /**
     * automlProjectsLocationsModelsDeploy - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsModelsDeploy(req: operations.AutomlProjectsLocationsModelsDeployRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsDeployResponse>;
    /**
     * automlProjectsLocationsModelsExport - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsModelsExport(req: operations.AutomlProjectsLocationsModelsExportRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsExportResponse>;
    /**
     * automlProjectsLocationsModelsExportEvaluatedExamples - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsModelsExportEvaluatedExamples(req: operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse>;
    /**
     * automlProjectsLocationsModelsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    automlProjectsLocationsModelsGetIamPolicy(req: operations.AutomlProjectsLocationsModelsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsGetIamPolicyResponse>;
    /**
     * automlProjectsLocationsModelsList - Lists models.
    **/
    automlProjectsLocationsModelsList(req: operations.AutomlProjectsLocationsModelsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsListResponse>;
    /**
     * automlProjectsLocationsModelsModelEvaluationsList - Lists model evaluations.
    **/
    automlProjectsLocationsModelsModelEvaluationsList(req: operations.AutomlProjectsLocationsModelsModelEvaluationsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsModelEvaluationsListResponse>;
    /**
     * automlProjectsLocationsModelsPredict - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
    **/
    automlProjectsLocationsModelsPredict(req: operations.AutomlProjectsLocationsModelsPredictRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsPredictResponse>;
    /**
     * automlProjectsLocationsModelsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    automlProjectsLocationsModelsSetIamPolicy(req: operations.AutomlProjectsLocationsModelsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsSetIamPolicyResponse>;
    /**
     * automlProjectsLocationsModelsUndeploy - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
    **/
    automlProjectsLocationsModelsUndeploy(req: operations.AutomlProjectsLocationsModelsUndeployRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsModelsUndeployResponse>;
    /**
     * automlProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    automlProjectsLocationsOperationsCancel(req: operations.AutomlProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsOperationsCancelResponse>;
    /**
     * automlProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    automlProjectsLocationsOperationsDelete(req: operations.AutomlProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsOperationsDeleteResponse>;
    /**
     * automlProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    automlProjectsLocationsOperationsGet(req: operations.AutomlProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsOperationsGetResponse>;
    /**
     * automlProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    automlProjectsLocationsOperationsList(req: operations.AutomlProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsOperationsListResponse>;
    /**
     * automlProjectsLocationsOperationsWait - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
    **/
    automlProjectsLocationsOperationsWait(req: operations.AutomlProjectsLocationsOperationsWaitRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsOperationsWaitResponse>;
    /**
     * automlProjectsLocationsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    automlProjectsLocationsTestIamPermissions(req: operations.AutomlProjectsLocationsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AutomlProjectsLocationsTestIamPermissionsResponse>;
}
