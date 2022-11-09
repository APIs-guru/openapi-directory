import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Endpoint for an end-user client to search similarity by content.
     *
     * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_content
     * ```
     *
    **/
    SrcSearchlyApiV1ControllersSimilarityByContent(req: operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse>;
    /**
     * Endpoint for an end-user client to search similarity by song identifier.
     *
     * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_song
     * ```
     *
    **/
    SrcSearchlyApiV1ControllersSimilarityBySong(req: operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse>;
    /**
     * Endpoint for an end-user client to search songs from the database given a String query.
     *
     * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
     *
     * ```
     * https://searchly.asuarez.dev/api/v1/song/search
     * ```
     *
    **/
    SrcSearchlyApiV1ControllersSongSearch(req: operations.SrcSearchlyApiV1ControllersSongSearchRequest, config?: AxiosRequestConfig): Promise<operations.SrcSearchlyApiV1ControllersSongSearchResponse>;
}
export {};
