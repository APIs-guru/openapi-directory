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
     * adexchangebuyerAccountsGet - Gets one account by ID.
    **/
    adexchangebuyerAccountsGet(req: operations.AdexchangebuyerAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsGetResponse>;
    /**
     * adexchangebuyerAccountsList - Retrieves the authenticated user's list of accounts.
    **/
    adexchangebuyerAccountsList(req: operations.AdexchangebuyerAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsListResponse>;
    /**
     * adexchangebuyerAccountsPatch - Updates an existing account. This method supports patch semantics.
    **/
    adexchangebuyerAccountsPatch(req: operations.AdexchangebuyerAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsPatchResponse>;
    /**
     * adexchangebuyerAccountsUpdate - Updates an existing account.
    **/
    adexchangebuyerAccountsUpdate(req: operations.AdexchangebuyerAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsUpdateResponse>;
}
