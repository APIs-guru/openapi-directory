import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Returns a list of food item nutrition facts extracted from an input string containing food and beverage words.
     * www.calorieninjas.com/api
    **/
    GetV1Nutrition(req: operations.GetV1NutritionRequest, config?: AxiosRequestConfig): Promise<operations.GetV1NutritionResponse>;
}
export {};
