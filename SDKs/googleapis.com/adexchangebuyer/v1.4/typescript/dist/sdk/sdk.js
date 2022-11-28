import axios from "axios";
import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { BillingInfo } from "./billinginfo";
import { Budget } from "./budget";
import { Creatives } from "./creatives";
import { Marketplacedeals } from "./marketplacedeals";
import { Marketplacenotes } from "./marketplacenotes";
import { Marketplaceprivateauction } from "./marketplaceprivateauction";
import { PerformanceReport } from "./performancereport";
import { PretargetingConfig } from "./pretargetingconfig";
import { Products } from "./products";
import { Proposals } from "./proposals";
import { Pubprofiles } from "./pubprofiles";
export var ServerList = [
    "https://www.googleapis.com/adexchangebuyer/v1.4",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
/* SDK Documentation: https://developers.google.com/ad-exchange/buyer-rest*/
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
        this.accounts = new Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.billingInfo = new BillingInfo(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.budget = new Budget(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creatives = new Creatives(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplacedeals = new Marketplacedeals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplacenotes = new Marketplacenotes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.marketplaceprivateauction = new Marketplaceprivateauction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.performanceReport = new PerformanceReport(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pretargetingConfig = new PretargetingConfig(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.proposals = new Proposals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pubprofiles = new Pubprofiles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
