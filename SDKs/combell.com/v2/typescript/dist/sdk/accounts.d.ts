import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAccount - Create a new account
     *
     * The creation of an account requires some background processing. There is no instant feedback of the creation status.
    **/
    createAccount(req: operations.CreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    /**
     * getAccount - Get a specific account
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getAccounts - Overview of accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
}
