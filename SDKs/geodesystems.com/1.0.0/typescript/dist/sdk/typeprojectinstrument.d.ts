import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectInstrument {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectInstrument - Search API for 'Instrument Data Collection' entry type
     *
     * API to search for entries of type Instrument Data Collection
    **/
    searchProjectInstrument(req: operations.SearchProjectInstrumentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectInstrumentResponse>;
}
