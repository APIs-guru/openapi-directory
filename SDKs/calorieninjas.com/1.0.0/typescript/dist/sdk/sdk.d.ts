import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.calorieninjas.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getV1Nutrition - Get nutrition text for an input string containing food and beverage words.
     *
     * Returns a list of food item nutrition facts extracted from an input string containing food and beverage words.
     *
     * www.calorieninjas.com/api
    **/
    getV1Nutrition(req: operations.GetV1NutritionRequest, config?: AxiosRequestConfig): Promise<operations.GetV1NutritionResponse>;
}
export {};
