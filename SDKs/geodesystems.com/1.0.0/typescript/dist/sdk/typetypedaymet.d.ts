import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDaymet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDaymet - Search API for 'Daymet Daily Weather' entry type
     *
     * API to search for entries of type Daymet Daily Weather
    **/
    searchTypeDaymet(req: operations.SearchTypeDaymetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDaymetResponse>;
}
