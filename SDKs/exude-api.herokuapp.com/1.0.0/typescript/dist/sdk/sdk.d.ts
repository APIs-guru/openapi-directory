import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://exude-api.herokuapp.com", "http://localhost:8080"];
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
     * filterFileDataStoppings - Filter the stopping words from the provided input file
    **/
    filterFileDataStoppings(req: operations.FilterFileDataStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterFileDataStoppingsResponse>;
    /**
     * filterStoppings - Filter the stopping words from the provided input data or links
    **/
    filterStoppings(req: operations.FilterStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterStoppingsResponse>;
}
export {};
