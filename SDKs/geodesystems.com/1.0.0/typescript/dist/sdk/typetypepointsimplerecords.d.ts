import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointSimpleRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointSimpleRecords - Search API for 'Simple Records' entry type
     *
     * API to search for entries of type Simple Records
    **/
    searchTypePointSimpleRecords(req: operations.SearchTypePointSimpleRecordsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointSimpleRecordsResponse>;
}
