import axios, { AxiosInstance } from "axios";
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

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.corrently.io/v2.0",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {
  public dispatchGreenEnergyDistributionApi: DispatchGreenEnergyDistributionApi;
  public greenPowerIndexGrünstromIndex: GreenPowerIndexGrünstromIndex;
  public meteringDecorator: MeteringDecorator;
  public ocpp: Ocpp;
  public openMeter: OpenMeter;
  public smartHome: SmartHome;
  public stromQuittung: StromQuittung;
  public stromkontoLedger: StromkontoLedger;
  public tse: Tse;
  public tariffPriceApi: TariffPriceApi;
  public wiMWechselprozesseImMesswesenStromStatusApi: WiMWechselprozesseImMesswesenStromStatusApi;
  public easee: Easee;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.dispatchGreenEnergyDistributionApi = new DispatchGreenEnergyDistributionApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.greenPowerIndexGrünstromIndex = new GreenPowerIndexGrünstromIndex(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.meteringDecorator = new MeteringDecorator(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ocpp = new Ocpp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.openMeter = new OpenMeter(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.smartHome = new SmartHome(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stromQuittung = new StromQuittung(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stromkontoLedger = new StromkontoLedger(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tse = new Tse(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tariffPriceApi = new TariffPriceApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wiMWechselprozesseImMesswesenStromStatusApi = new WiMWechselprozesseImMesswesenStromStatusApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.easee = new Easee(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
