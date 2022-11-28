import { AxiosInstance } from "axios";
import { Similarity } from "./similarity";
import { Song } from "./song";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://searchly.asuarez.dev/api/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    similarity: Similarity;
    song: Song;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
