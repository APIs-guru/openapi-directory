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
    DeleteFact(req: operations.DeleteFactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFactResponse>;
    GetFact(req: operations.GetFactRequest, config?: AxiosRequestConfig): Promise<operations.GetFactResponse>;
    GetFactCategories(req: operations.GetFactCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFactCategoriesResponse>;
    GetFactFod(req: operations.GetFactFodRequest, config?: AxiosRequestConfig): Promise<operations.GetFactFodResponse>;
    GetFactFodCategories(req: operations.GetFactFodCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFactFodCategoriesResponse>;
    GetFactNumbers(req: operations.GetFactNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetFactNumbersResponse>;
    GetFactOnthisdayBorn(req: operations.GetFactOnthisdayBornRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayBornResponse>;
    GetFactOnthisdayDied(req: operations.GetFactOnthisdayDiedRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayDiedResponse>;
    GetFactOnthisdayEvent(req: operations.GetFactOnthisdayEventRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayEventResponse>;
    GetFactRandom(req: operations.GetFactRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetFactRandomResponse>;
    GetFactSearch(req: operations.GetFactSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFactSearchResponse>;
    PutFact(req: operations.PutFactRequest, config?: AxiosRequestConfig): Promise<operations.PutFactResponse>;
}
export {};
