import axios from "axios";
import * as utils from "../internal/utils";
import { DispatchGreenEnergyDistributionApi } from "./dispatchgreenenergydistributionapi";
import { GreenPowerIndexGrünstromIndex } from "./greenpowerindexgrünstromindex";
import { MeteringDecorator } from "./meteringdecorator";
import { Ocpp } from "./ocpp";
import { OpenMeter } from "./openmeter";
import { SmartHome } from "./smarthome";
import { StromQuittung } from "./stromquittung";
import { StromkontoLedger } from "./stromkontoledger";
import { Tse } from "./tse";
import { TariffPriceApi } from "./tariffpriceapi";
import { WiMWechselprozesseImMesswesenStromStatusApi } from "./wimwechselprozesseimmesswesenstromstatusapi";
import { Easee } from "./easee";
export var ServerList = [
    "https://api.corrently.io/v2.0",
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
        this.dispatchGreenEnergyDistributionApi = new DispatchGreenEnergyDistributionApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.greenPowerIndexGrünstromIndex = new GreenPowerIndexGrünstromIndex(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.meteringDecorator = new MeteringDecorator(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ocpp = new Ocpp(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.openMeter = new OpenMeter(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.smartHome = new SmartHome(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.stromQuittung = new StromQuittung(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.stromkontoLedger = new StromkontoLedger(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tse = new Tse(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tariffPriceApi = new TariffPriceApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.wiMWechselprozesseImMesswesenStromStatusApi = new WiMWechselprozesseImMesswesenStromStatusApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.easee = new Easee(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
