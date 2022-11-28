import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Category {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * categoriesAll - List categories
     *
     * List categories
    **/
    categoriesAll(req: operations.CategoriesAllRequest, config?: AxiosRequestConfig): Promise<operations.CategoriesAllResponse>;
    /**
     * categoriesOne - Get category
     *
     * Get category
    **/
    categoriesOne(req: operations.CategoriesOneRequest, config?: AxiosRequestConfig): Promise<operations.CategoriesOneResponse>;
    /**
     * categoryListingsAll - List category listings
     *
     * List category listings
    **/
    categoryListingsAll(req: operations.CategoryListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.CategoryListingsAllResponse>;
}
