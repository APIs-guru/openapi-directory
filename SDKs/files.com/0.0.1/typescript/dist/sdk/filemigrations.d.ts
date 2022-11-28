import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileMigrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFileMigrationsId - Show File Migration
     *
     * Show File Migration
    **/
    getFileMigrationsId(req: operations.GetFileMigrationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileMigrationsIdResponse>;
}
