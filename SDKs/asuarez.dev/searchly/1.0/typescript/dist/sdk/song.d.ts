import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Song {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * srcSearchlyApiV1ControllersSongSearch - API endpoint to search songs from the database given a query
     *
     * Endpoint for an end-user client to search songs from the database given a String query.
     *
     * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/song/search
     * ```
     *
    **/
    srcSearchlyApiV1ControllersSongSearch(req: operations.SrcSearchlyApiV1ControllersSongSearchRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSongSearchResponse>;
}
