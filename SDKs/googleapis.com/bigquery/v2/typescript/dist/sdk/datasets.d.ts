import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Datasets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryDatasetsDelete - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
    **/
    bigqueryDatasetsDelete(req: operations.BigqueryDatasetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsDeleteResponse>;
    /**
     * bigqueryDatasetsGet - Returns the dataset specified by datasetID.
    **/
    bigqueryDatasetsGet(req: operations.BigqueryDatasetsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsGetResponse>;
    /**
     * bigqueryDatasetsInsert - Creates a new empty dataset.
    **/
    bigqueryDatasetsInsert(req: operations.BigqueryDatasetsInsertRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsInsertResponse>;
    /**
     * bigqueryDatasetsList - Lists all datasets in the specified project to which you have been granted the READER dataset role.
    **/
    bigqueryDatasetsList(req: operations.BigqueryDatasetsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsListResponse>;
    /**
     * bigqueryDatasetsPatch - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
    **/
    bigqueryDatasetsPatch(req: operations.BigqueryDatasetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsPatchResponse>;
    /**
     * bigqueryDatasetsUpdate - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
    **/
    bigqueryDatasetsUpdate(req: operations.BigqueryDatasetsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryDatasetsUpdateResponse>;
}
