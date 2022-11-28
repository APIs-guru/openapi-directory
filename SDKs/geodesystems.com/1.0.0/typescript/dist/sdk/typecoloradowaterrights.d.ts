import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeColoradoWaterRights {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchColoradoWaterRights - Search API for 'Colorado Water Rights' entry type
     *
     * API to search for entries of type Colorado Water Rights
    **/
    searchColoradoWaterRights(req: operations.SearchColoradoWaterRightsRequest, config?: AxiosRequestConfig): Promise<operations.SearchColoradoWaterRightsResponse>;
}
