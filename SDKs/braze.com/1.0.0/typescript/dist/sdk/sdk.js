import axios from "axios";
import * as utils from "../internal/utils";
import { Campaign } from "./campaign";
import { Canvas } from "./canvas";
import { ContentBlocks } from "./contentblocks";
import { CustomEvents } from "./customevents";
import { EmailListsAndAddresses } from "./emaillistsandaddresses";
import { EmailTemplates } from "./emailtemplates";
import { Export } from "./export";
import { Kpi } from "./kpi";
import { Messaging } from "./messaging";
import { NewsFeed } from "./newsfeed";
import { Sms } from "./sms";
import { ScheduleMesages } from "./schedulemesages";
import { Segment } from "./segment";
import { SessionAnalytics } from "./sessionanalytics";
import { SubscriptionGroups } from "./subscriptiongroups";
import { Templates } from "./templates";
export var ServerList = [
    "https://rest.iad-01.braze.com",
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
        this.campaign = new Campaign(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.canvas = new Canvas(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.contentBlocks = new ContentBlocks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customEvents = new CustomEvents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.emailListsAndAddresses = new EmailListsAndAddresses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.emailTemplates = new EmailTemplates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.export = new Export(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.kpi = new Kpi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messaging = new Messaging(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.newsFeed = new NewsFeed(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sms = new Sms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.scheduleMesages = new ScheduleMesages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.segment = new Segment(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sessionAnalytics = new SessionAnalytics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.subscriptionGroups = new SubscriptionGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.templates = new Templates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
