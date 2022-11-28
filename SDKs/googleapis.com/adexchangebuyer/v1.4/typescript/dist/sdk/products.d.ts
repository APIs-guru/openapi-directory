import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerProductsGet - Gets the requested product by id.
    **/
    adexchangebuyerProductsGet(req: operations.AdexchangebuyerProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProductsGetResponse>;
    /**
     * adexchangebuyerProductsSearch - Gets the requested product.
    **/
    adexchangebuyerProductsSearch(req: operations.AdexchangebuyerProductsSearchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProductsSearchResponse>;
}
