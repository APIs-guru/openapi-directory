import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * productListingsAll - List product listings
     *
     * List product listings
    **/
    productListingsAll(req: operations.ProductListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductListingsAllResponse>;
    /**
     * productsAll - List products
     *
     * List products
    **/
    productsAll(req: operations.ProductsAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductsAllResponse>;
    /**
     * productsOne - Get product
     *
     * Get product
    **/
    productsOne(req: operations.ProductsOneRequest, config?: AxiosRequestConfig): Promise<operations.ProductsOneResponse>;
}
