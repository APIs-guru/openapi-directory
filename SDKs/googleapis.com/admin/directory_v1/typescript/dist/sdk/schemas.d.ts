import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directorySchemasDelete - Deletes a schema.
    **/
    directorySchemasDelete(req: operations.DirectorySchemasDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasDeleteResponse>;
    /**
     * directorySchemasGet - Retrieves a schema.
    **/
    directorySchemasGet(req: operations.DirectorySchemasGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasGetResponse>;
    /**
     * directorySchemasInsert - Creates a schema.
    **/
    directorySchemasInsert(req: operations.DirectorySchemasInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasInsertResponse>;
    /**
     * directorySchemasList - Retrieves all schemas for a customer.
    **/
    directorySchemasList(req: operations.DirectorySchemasListRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasListResponse>;
    /**
     * directorySchemasPatch - Patches a schema.
    **/
    directorySchemasPatch(req: operations.DirectorySchemasPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasPatchResponse>;
    /**
     * directorySchemasUpdate - Updates a schema.
    **/
    directorySchemasUpdate(req: operations.DirectorySchemasUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasUpdateResponse>;
}
