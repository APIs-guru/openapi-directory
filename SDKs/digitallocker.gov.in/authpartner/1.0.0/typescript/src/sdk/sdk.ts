import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountDetailApi } from "./accountdetailapi";
import { Authorization } from "./authorization";
import { AuthorizationApi } from "./authorizationapi";
import { DigiLockerMetaApIs } from "./digilockermetaapis";
import { DigiLockerSignUpApIs } from "./digilockersignupapis";
import { FileApIs } from "./fileapis";
import { TokenRevocationApi } from "./tokenrevocationapi";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://betaapi.digitallocker.gov.in/public",
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
  public accountDetailApi: AccountDetailApi;
  public authorization: Authorization;
  public authorizationApi: AuthorizationApi;
  public digiLockerMetaApIs: DigiLockerMetaApIs;
  public digiLockerSignUpApIs: DigiLockerSignUpApIs;
  public fileApIs: FileApIs;
  public tokenRevocationApi: TokenRevocationApi;

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
    
    this.accountDetailApi = new AccountDetailApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authorization = new Authorization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authorizationApi = new AuthorizationApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.digiLockerMetaApIs = new DigiLockerMetaApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.digiLockerSignUpApIs = new DigiLockerSignUpApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fileApIs = new FileApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tokenRevocationApi = new TokenRevocationApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
