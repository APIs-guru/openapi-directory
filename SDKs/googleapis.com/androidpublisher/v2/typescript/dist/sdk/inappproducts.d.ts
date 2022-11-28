import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Inappproducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherInappproductsDelete - Delete an in-app product for an app.
    **/
    androidpublisherInappproductsDelete(req: operations.AndroidpublisherInappproductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsDeleteResponse>;
    /**
     * androidpublisherInappproductsGet - Returns information about the in-app product specified.
    **/
    androidpublisherInappproductsGet(req: operations.AndroidpublisherInappproductsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsGetResponse>;
    /**
     * androidpublisherInappproductsInsert - Creates a new in-app product for an app.
    **/
    androidpublisherInappproductsInsert(req: operations.AndroidpublisherInappproductsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsInsertResponse>;
    /**
     * androidpublisherInappproductsList - List all the in-app products for an Android app, both subscriptions and managed in-app products..
    **/
    androidpublisherInappproductsList(req: operations.AndroidpublisherInappproductsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsListResponse>;
    /**
     * androidpublisherInappproductsPatch - Updates the details of an in-app product. This method supports patch semantics.
    **/
    androidpublisherInappproductsPatch(req: operations.AndroidpublisherInappproductsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsPatchResponse>;
    /**
     * androidpublisherInappproductsUpdate - Updates the details of an in-app product.
    **/
    androidpublisherInappproductsUpdate(req: operations.AndroidpublisherInappproductsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsUpdateResponse>;
}
