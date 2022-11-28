import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { BillingInfo } from "./billinginfo";
import { Budget } from "./budget";
import { Creatives } from "./creatives";
import { DirectDeals } from "./directdeals";
import { PerformanceReport } from "./performancereport";
import { PretargetingConfig } from "./pretargetingconfig";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/adexchangebuyer/v1.3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accounts: Accounts;
    billingInfo: BillingInfo;
    budget: Budget;
    creatives: Creatives;
    directDeals: DirectDeals;
    performanceReport: PerformanceReport;
    pretargetingConfig: PretargetingConfig;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
