import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://featurestore-runtime.sagemaker.{region}.amazonaws.com", "https://featurestore-runtime.sagemaker.{region}.amazonaws.com", "http://featurestore-runtime.sagemaker.{region}.amazonaws.com.cn", "https://featurestore-runtime.sagemaker.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchGetRecord - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
    **/
    batchGetRecord(req: operations.BatchGetRecordRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRecordResponse>;
    /**
     * deleteRecord - Deletes a <code>Record</code> from a <code>FeatureGroup</code>. A new record will show up in the <code>OfflineStore</code> when the <code>DeleteRecord</code> API is called. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
    **/
    deleteRecord(req: operations.DeleteRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordResponse>;
    /**
     * getRecord - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned.
    **/
    getRecord(req: operations.GetRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordResponse>;
    /**
     * putRecord - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
    **/
    putRecord(req: operations.PutRecordRequest, config?: AxiosRequestConfig): Promise<operations.PutRecordResponse>;
}
export {};
