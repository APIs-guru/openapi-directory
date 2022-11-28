import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LedgerAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ledgerAccountsAdd - Create Ledger Account
     *
     * Create Ledger Account
    **/
    ledgerAccountsAdd(req: operations.LedgerAccountsAddRequest, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsAddResponse>;
    /**
     * ledgerAccountsAll - List Ledger Accounts
     *
     * List Ledger Accounts
    **/
    ledgerAccountsAll(req: operations.LedgerAccountsAllRequest, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsAllResponse>;
    /**
     * ledgerAccountsDelete - Delete Ledger Account
     *
     * Delete Ledger Account
    **/
    ledgerAccountsDelete(req: operations.LedgerAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsDeleteResponse>;
    /**
     * ledgerAccountsOne - Get Ledger Account
     *
     * Get Ledger Account
    **/
    ledgerAccountsOne(req: operations.LedgerAccountsOneRequest, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsOneResponse>;
    /**
     * ledgerAccountsUpdate - Update Ledger Account
     *
     * Update Ledger Account
    **/
    ledgerAccountsUpdate(req: operations.LedgerAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LedgerAccountsUpdateResponse>;
}
