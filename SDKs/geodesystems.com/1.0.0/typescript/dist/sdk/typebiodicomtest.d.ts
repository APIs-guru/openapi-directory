import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioDicomTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioDicomTest - Search API for 'DICOM Test File' entry type
     *
     * API to search for entries of type DICOM Test File
    **/
    searchBioDicomTest(req: operations.SearchBioDicomTestRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioDicomTestResponse>;
}
