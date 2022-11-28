import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEsriRestfolder {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEsriRestfolder - Search API for 'ESRI Services Folder' entry type
     *
     * API to search for entries of type ESRI Services Folder
    **/
    searchTypeEsriRestfolder(req: operations.SearchTypeEsriRestfolderRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriRestfolderResponse>;
}
