import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Similarity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * srcSearchlyApiV1ControllersSimilarityByContent - API endpoint to search similarity using content
     *
     * Endpoint for an end-user client to search similarity by content.
     *
     * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_content
     * ```
     *
    **/
    srcSearchlyApiV1ControllersSimilarityByContent(req: operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse>;
    /**
     * srcSearchlyApiV1ControllersSimilarityBySong - API endpoint to search similarity using a song identifier
     *
     * Endpoint for an end-user client to search similarity by song identifier.
     *
     * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_song
     * ```
     *
    **/
    srcSearchlyApiV1ControllersSimilarityBySong(req: operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse>;
}
