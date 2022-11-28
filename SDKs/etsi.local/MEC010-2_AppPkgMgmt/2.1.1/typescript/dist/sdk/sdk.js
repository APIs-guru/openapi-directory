import axios from "axios";
import * as utils from "../internal/utils";
import { AppPkgm } from "./apppkgm";
import { AppPkgmNotifications } from "./apppkgmnotifications";
export var ServerList = [
    "http://etsi.local",
    "https://localhost/app_pkgm/v1",
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
/* SDK Documentation: https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf - ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1*/
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
        this.appPkgm = new AppPkgm(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.appPkgmNotifications = new AppPkgmNotifications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
