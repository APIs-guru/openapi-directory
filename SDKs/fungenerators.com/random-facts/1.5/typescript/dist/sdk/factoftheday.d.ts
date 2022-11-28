import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FactOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFactFod - Get fact of the day for the given category.
    **/
    getFactFod(req: operations.GetFactFodRequest, config?: AxiosRequestConfig): Promise<operations.GetFactFodResponse>;
    /**
     * getFactFodCategories - Get the list of supported fact of the day categories.
    **/
    getFactFodCategories(req: operations.GetFactFodCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFactFodCategoriesResponse>;
}
