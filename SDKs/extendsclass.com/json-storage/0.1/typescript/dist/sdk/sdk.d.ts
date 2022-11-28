import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://extendsclass.com/api/json-storage"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteBinId - Delete a json bin
    **/
    deleteBinId(req: operations.DeleteBinIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBinIdResponse>;
    /**
     * getBinId - Return a json bin
    **/
    getBinId(req: operations.GetBinIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBinIdResponse>;
    /**
     * patchBinId - Partially update a json bin with JSON Merge Patch
    **/
    patchBinId(req: operations.PatchBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBinIdResponse>;
    /**
     * postBin - Create a json bin
    **/
    postBin(config?: AxiosRequestConfig): Promise<operations.PostBinResponse>;
    /**
     * putBinId - Update a json bin
    **/
    putBinId(req: operations.PutBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PutBinIdResponse>;
}
export {};
