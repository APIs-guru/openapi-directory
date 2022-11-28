import { AxiosInstance } from "axios";
import { Activities } from "./activities";
import { Channels } from "./channels";
import { CustomerUsageReports } from "./customerusagereports";
import { EntityUsageReports } from "./entityusagereports";
import { UserUsageReport } from "./userusagereport";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://admin.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    activities: Activities;
    channels: Channels;
    customerUsageReports: CustomerUsageReports;
    entityUsageReports: EntityUsageReports;
    userUsageReport: UserUsageReport;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
