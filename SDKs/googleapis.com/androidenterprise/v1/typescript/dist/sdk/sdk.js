import axios from "axios";
import * as utils from "../internal/utils";
import { Devices } from "./devices";
import { Enterprises } from "./enterprises";
import { Entitlements } from "./entitlements";
import { Grouplicenses } from "./grouplicenses";
import { Grouplicenseusers } from "./grouplicenseusers";
import { Installs } from "./installs";
import { Managedconfigurationsfordevice } from "./managedconfigurationsfordevice";
import { Managedconfigurationsforuser } from "./managedconfigurationsforuser";
import { Managedconfigurationssettings } from "./managedconfigurationssettings";
import { Permissions } from "./permissions";
import { Products } from "./products";
import { Serviceaccountkeys } from "./serviceaccountkeys";
import { Storelayoutclusters } from "./storelayoutclusters";
import { Storelayoutpages } from "./storelayoutpages";
import { Users } from "./users";
import { Webapps } from "./webapps";
export var ServerList = [
    "https://androidenterprise.googleapis.com/",
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
/* SDK Documentation: https://developers.google.com/android/work/play/emm-api*/
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
        this.devices = new Devices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.enterprises = new Enterprises(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.entitlements = new Entitlements(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.grouplicenses = new Grouplicenses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.grouplicenseusers = new Grouplicenseusers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.installs = new Installs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.managedconfigurationsfordevice = new Managedconfigurationsfordevice(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.managedconfigurationsforuser = new Managedconfigurationsforuser(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.managedconfigurationssettings = new Managedconfigurationssettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.permissions = new Permissions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.serviceaccountkeys = new Serviceaccountkeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.storelayoutclusters = new Storelayoutclusters(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.storelayoutpages = new Storelayoutpages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.webapps = new Webapps(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
