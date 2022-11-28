import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeEarthSatelliteLandsat {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchEarthSatelliteLandsat - Search API for 'Landsat Satellite Data' entry type
     *
     * API to search for entries of type Landsat Satellite Data
    **/
    searchEarthSatelliteLandsat(req: operations.SearchEarthSatelliteLandsatRequest, config?: AxiosRequestConfig): Promise<operations.SearchEarthSatelliteLandsatResponse>;
}
