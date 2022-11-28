import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tables {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * area120tablesTablesList - Lists tables for the user.
    **/
    area120tablesTablesList(req: operations.Area120tablesTablesListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesListResponse>;
    /**
     * area120tablesTablesRowsBatchCreate - Creates multiple rows.
    **/
    area120tablesTablesRowsBatchCreate(req: operations.Area120tablesTablesRowsBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchCreateResponse>;
    /**
     * area120tablesTablesRowsBatchDelete - Deletes multiple rows.
    **/
    area120tablesTablesRowsBatchDelete(req: operations.Area120tablesTablesRowsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchDeleteResponse>;
    /**
     * area120tablesTablesRowsBatchUpdate - Updates multiple rows.
    **/
    area120tablesTablesRowsBatchUpdate(req: operations.Area120tablesTablesRowsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchUpdateResponse>;
    /**
     * area120tablesTablesRowsCreate - Creates a row.
    **/
    area120tablesTablesRowsCreate(req: operations.Area120tablesTablesRowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsCreateResponse>;
    /**
     * area120tablesTablesRowsDelete - Deletes a row.
    **/
    area120tablesTablesRowsDelete(req: operations.Area120tablesTablesRowsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsDeleteResponse>;
    /**
     * area120tablesTablesRowsList - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
    **/
    area120tablesTablesRowsList(req: operations.Area120tablesTablesRowsListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsListResponse>;
    /**
     * area120tablesTablesRowsPatch - Updates a row.
    **/
    area120tablesTablesRowsPatch(req: operations.Area120tablesTablesRowsPatchRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsPatchResponse>;
}
