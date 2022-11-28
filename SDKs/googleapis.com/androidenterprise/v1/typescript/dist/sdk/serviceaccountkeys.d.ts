import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Serviceaccountkeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseServiceaccountkeysDelete - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
    **/
    androidenterpriseServiceaccountkeysDelete(req: operations.AndroidenterpriseServiceaccountkeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseServiceaccountkeysDeleteResponse>;
    /**
     * androidenterpriseServiceaccountkeysInsert - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
    **/
    androidenterpriseServiceaccountkeysInsert(req: operations.AndroidenterpriseServiceaccountkeysInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseServiceaccountkeysInsertResponse>;
    /**
     * androidenterpriseServiceaccountkeysList - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
    **/
    androidenterpriseServiceaccountkeysList(req: operations.AndroidenterpriseServiceaccountkeysListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseServiceaccountkeysListResponse>;
}
