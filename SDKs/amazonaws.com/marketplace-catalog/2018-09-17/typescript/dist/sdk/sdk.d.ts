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
    CancelChangeSet(req: operations.CancelChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.CancelChangeSetResponse>;
    DescribeChangeSet(req: operations.DescribeChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeChangeSetResponse>;
    DescribeEntity(req: operations.DescribeEntityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntityResponse>;
    ListChangeSets(req: operations.ListChangeSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListChangeSetsResponse>;
    ListEntities(req: operations.ListEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesResponse>;
    StartChangeSet(req: operations.StartChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.StartChangeSetResponse>;
}
export {};
