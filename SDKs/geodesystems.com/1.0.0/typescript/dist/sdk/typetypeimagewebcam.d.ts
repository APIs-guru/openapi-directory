import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeImageWebcam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeImageWebcam - Search API for 'Webcam' entry type
     *
     * API to search for entries of type Webcam
    **/
    searchTypeImageWebcam(req: operations.SearchTypeImageWebcamRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageWebcamResponse>;
}
