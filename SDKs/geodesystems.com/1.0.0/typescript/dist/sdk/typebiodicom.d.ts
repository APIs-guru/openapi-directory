import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioDicom {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioDicom - Search API for 'DICOM File' entry type
     *
     * API to search for entries of type DICOM File
    **/
    searchBioDicom(req: operations.SearchBioDicomRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioDicomResponse>;
}
