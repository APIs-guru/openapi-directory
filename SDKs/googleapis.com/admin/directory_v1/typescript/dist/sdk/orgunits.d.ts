import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orgunits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryOrgunitsDelete - Removes an organizational unit.
    **/
    directoryOrgunitsDelete(req: operations.DirectoryOrgunitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsDeleteResponse>;
    /**
     * directoryOrgunitsGet - Retrieves an organizational unit.
    **/
    directoryOrgunitsGet(req: operations.DirectoryOrgunitsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsGetResponse>;
    /**
     * directoryOrgunitsInsert - Adds an organizational unit.
    **/
    directoryOrgunitsInsert(req: operations.DirectoryOrgunitsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsInsertResponse>;
    /**
     * directoryOrgunitsList - Retrieves a list of all organizational units for an account.
    **/
    directoryOrgunitsList(req: operations.DirectoryOrgunitsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsListResponse>;
    /**
     * directoryOrgunitsPatch - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
    **/
    directoryOrgunitsPatch(req: operations.DirectoryOrgunitsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsPatchResponse>;
    /**
     * directoryOrgunitsUpdate - Updates an organizational unit.
    **/
    directoryOrgunitsUpdate(req: operations.DirectoryOrgunitsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsUpdateResponse>;
}
