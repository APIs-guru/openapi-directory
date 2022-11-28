import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { V1Company } from "./v1company";
import { V1EinVerification } from "./v1einverification";
import { V1IbanVerification } from "./v1ibanverification";
import { V1NifVerification } from "./v1nifverification";
import { V1Pepsanction } from "./v1pepsanction";
import { V1Product } from "./v1product";
import { V1System } from "./v1system";
import { V1TinVerification } from "./v1tinverification";
import { V1VatVerification } from "./v1vatverification";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.kompany.com/",
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
  public v1Company: V1Company;
  public v1EinVerification: V1EinVerification;
  public v1IbanVerification: V1IbanVerification;
  public v1NifVerification: V1NifVerification;
  public v1Pepsanction: V1Pepsanction;
  public v1Product: V1Product;
  public v1System: V1System;
  public v1TinVerification: V1TinVerification;
  public v1VatVerification: V1VatVerification;

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
    
    this.v1Company = new V1Company(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1EinVerification = new V1EinVerification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1IbanVerification = new V1IbanVerification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1NifVerification = new V1NifVerification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1Pepsanction = new V1Pepsanction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1Product = new V1Product(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1System = new V1System(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1TinVerification = new V1TinVerification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1VatVerification = new V1VatVerification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
