import axios from "axios";
import * as utils from "../internal/utils";
import { AccountDetailApi } from "./accountdetailapi";
import { Authorization } from "./authorization";
import { AuthorizationApi } from "./authorizationapi";
import { DigiLockerMetaApIs } from "./digilockermetaapis";
import { DigiLockerSignUpApIs } from "./digilockersignupapis";
import { FileApIs } from "./fileapis";
import { TokenRevocationApi } from "./tokenrevocationapi";
export var ServerList = [
    "https://betaapi.digitallocker.gov.in/public",
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
        this.accountDetailApi = new AccountDetailApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authorization = new Authorization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authorizationApi = new AuthorizationApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.digiLockerMetaApIs = new DigiLockerMetaApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.digiLockerSignUpApIs = new DigiLockerSignUpApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileApIs = new FileApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tokenRevocationApi = new TokenRevocationApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
