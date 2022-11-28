import axios, { AxiosInstance } from "axios";
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

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://androidenterprise.googleapis.com/",
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

/* SDK Documentation: https://developers.google.com/android/work/play/emm-api*/
export class SDK {
  public devices: Devices;
  public enterprises: Enterprises;
  public entitlements: Entitlements;
  public grouplicenses: Grouplicenses;
  public grouplicenseusers: Grouplicenseusers;
  public installs: Installs;
  public managedconfigurationsfordevice: Managedconfigurationsfordevice;
  public managedconfigurationsforuser: Managedconfigurationsforuser;
  public managedconfigurationssettings: Managedconfigurationssettings;
  public permissions: Permissions;
  public products: Products;
  public serviceaccountkeys: Serviceaccountkeys;
  public storelayoutclusters: Storelayoutclusters;
  public storelayoutpages: Storelayoutpages;
  public users: Users;
  public webapps: Webapps;

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
    
    this.devices = new Devices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.enterprises = new Enterprises(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entitlements = new Entitlements(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.grouplicenses = new Grouplicenses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.grouplicenseusers = new Grouplicenseusers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.installs = new Installs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managedconfigurationsfordevice = new Managedconfigurationsfordevice(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managedconfigurationsforuser = new Managedconfigurationsforuser(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managedconfigurationssettings = new Managedconfigurationssettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.permissions = new Permissions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.serviceaccountkeys = new Serviceaccountkeys(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.storelayoutclusters = new Storelayoutclusters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.storelayoutpages = new Storelayoutpages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webapps = new Webapps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
