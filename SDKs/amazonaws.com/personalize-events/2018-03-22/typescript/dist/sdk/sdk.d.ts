import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://personalize-events.{region}.amazonaws.com", "https://personalize-events.{region}.amazonaws.com", "http://personalize-events.{region}.amazonaws.com.cn", "https://personalize-events.{region}.amazonaws.com.cn"];
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
     * putEvents - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
    **/
    putEvents(req: operations.PutEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutEventsResponse>;
    /**
     * putItems - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
    **/
    putItems(req: operations.PutItemsRequest, config?: AxiosRequestConfig): Promise<operations.PutItemsResponse>;
    /**
     * putUsers - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
    **/
    putUsers(req: operations.PutUsersRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersResponse>;
}
export {};
