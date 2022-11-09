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
    PutEvents(req: operations.PutEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutEventsResponse>;
    PutItems(req: operations.PutItemsRequest, config?: AxiosRequestConfig): Promise<operations.PutItemsResponse>;
    PutUsers(req: operations.PutUsersRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersResponse>;
}
export {};
