import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Models {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryModelsDelete - Deletes the model specified by modelId from the dataset.
    **/
    bigqueryModelsDelete(req: operations.BigqueryModelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsDeleteResponse>;
    /**
     * bigqueryModelsGet - Gets the specified model resource by model ID.
    **/
    bigqueryModelsGet(req: operations.BigqueryModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsGetResponse>;
    /**
     * bigqueryModelsList - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
    **/
    bigqueryModelsList(req: operations.BigqueryModelsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsListResponse>;
    /**
     * bigqueryModelsPatch - Patch specific fields in the specified model.
    **/
    bigqueryModelsPatch(req: operations.BigqueryModelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsPatchResponse>;
}
