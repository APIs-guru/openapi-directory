import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Storelayoutpages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseStorelayoutpagesDelete - Deletes a store page.
    **/
    androidenterpriseStorelayoutpagesDelete(req: operations.AndroidenterpriseStorelayoutpagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesDeleteResponse>;
    /**
     * androidenterpriseStorelayoutpagesGet - Retrieves details of a store page.
    **/
    androidenterpriseStorelayoutpagesGet(req: operations.AndroidenterpriseStorelayoutpagesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesGetResponse>;
    /**
     * androidenterpriseStorelayoutpagesInsert - Inserts a new store page.
    **/
    androidenterpriseStorelayoutpagesInsert(req: operations.AndroidenterpriseStorelayoutpagesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesInsertResponse>;
    /**
     * androidenterpriseStorelayoutpagesList - Retrieves the details of all pages in the store.
    **/
    androidenterpriseStorelayoutpagesList(req: operations.AndroidenterpriseStorelayoutpagesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesListResponse>;
    /**
     * androidenterpriseStorelayoutpagesUpdate - Updates the content of a store page.
    **/
    androidenterpriseStorelayoutpagesUpdate(req: operations.AndroidenterpriseStorelayoutpagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesUpdateResponse>;
}
