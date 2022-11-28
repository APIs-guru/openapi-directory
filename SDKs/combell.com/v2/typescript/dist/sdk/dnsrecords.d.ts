import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DnsRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDnsDomainNameRecordsRecordId - Delete a record
    **/
    deleteDnsDomainNameRecordsRecordId(req: operations.DeleteDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDnsDomainNameRecordsRecordIdResponse>;
    /**
     * getDnsDomainNameRecords - Get records
    **/
    getDnsDomainNameRecords(req: operations.GetDnsDomainNameRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsDomainNameRecordsResponse>;
    /**
     * getDnsDomainNameRecordsRecordId - Get specific record
    **/
    getDnsDomainNameRecordsRecordId(req: operations.GetDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsDomainNameRecordsRecordIdResponse>;
    /**
     * postDnsDomainNameRecords - Create a record
    **/
    postDnsDomainNameRecords(req: operations.PostDnsDomainNameRecordsRequest, config?: AxiosRequestConfig): Promise<operations.PostDnsDomainNameRecordsResponse>;
    /**
     * putDnsDomainNameRecordsRecordId - Edit a record
    **/
    putDnsDomainNameRecordsRecordId(req: operations.PutDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDnsDomainNameRecordsRecordIdResponse>;
}
