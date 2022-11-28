import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointGeomagIaga2002 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointGeomagIaga2002 - Search API for 'IAGA 2002 Geomagnetism Data' entry type
     *
     * API to search for entries of type IAGA 2002 Geomagnetism Data
    **/
    searchTypePointGeomagIaga2002(req: operations.SearchTypePointGeomagIaga2002Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointGeomagIaga2002Response>;
}
