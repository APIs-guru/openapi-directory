import { AxiosInstance } from "axios";
import { AddressRequests } from "./addressrequests";
import { InfoRequests } from "./inforequests";
import { SubscriptionIpnRequests } from "./subscriptionipnrequests";
import { TransactionRequests } from "./transactionrequests";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://eu.eth.chaingateway.io/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    addressRequests: AddressRequests;
    infoRequests: InfoRequests;
    subscriptionIpnRequests: SubscriptionIpnRequests;
    transactionRequests: TransactionRequests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
