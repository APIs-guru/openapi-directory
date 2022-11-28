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
     * androidpublisherInappproductsDelete - Deletes an in-app product (i.e. a managed product or a subscriptions).
    **/
    androidpublisherInappproductsDelete(req: operations.AndroidpublisherInappproductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsDeleteResponse>;
    /**
     * androidpublisherInappproductsGet - Gets an in-app product, which can be a managed product or a subscription.
    **/
    androidpublisherInappproductsGet(req: operations.AndroidpublisherInappproductsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsGetResponse>;
    /**
     * androidpublisherInappproductsInsert - Creates an in-app product (i.e. a managed product or a subscriptions).
    **/
    androidpublisherInappproductsInsert(req: operations.AndroidpublisherInappproductsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsInsertResponse>;
    /**
     * androidpublisherInappproductsList - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
    **/
    androidpublisherInappproductsList(req: operations.AndroidpublisherInappproductsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsListResponse>;
    /**
     * androidpublisherInappproductsPatch - Patches an in-app product (i.e. a managed product or a subscriptions).
    **/
    androidpublisherInappproductsPatch(req: operations.AndroidpublisherInappproductsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsPatchResponse>;
    /**
     * androidpublisherInappproductsUpdate - Updates an in-app product (i.e. a managed product or a subscriptions).
    **/
    androidpublisherInappproductsUpdate(req: operations.AndroidpublisherInappproductsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsUpdateResponse>;
}
