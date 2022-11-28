import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEsriLayer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEsriLayer - Search API for 'ESRI Layer' entry type
     *
     * API to search for entries of type ESRI Layer
    **/
    searchTypeEsriLayer(req: operations.SearchTypeEsriLayerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriLayerResponse>;
}
