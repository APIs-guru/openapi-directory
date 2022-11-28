import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Auth } from "./auth";
import { Config } from "./config";
import { Downloads } from "./downloads";
import { Eventlog } from "./eventlog";
import { Groups } from "./groups";
import { Nodes } from "./nodes";
import { Provisioning } from "./provisioning";
import { Public } from "./public";
import { Resources } from "./resources";
import { Roles } from "./roles";
import { Settings } from "./settings";
import { Shares } from "./shares";
import { Syslog } from "./syslog";
import { SystemAuthConfig } from "./systemauthconfig";
import { SystemPoliciesConfig } from "./systempoliciesconfig";
import { SystemSettingsConfig } from "./systemsettingsconfig";
import { SystemStorageConfig } from "./systemstorageconfig";
import { Uploads } from "./uploads";
import { User } from "./user";
import { Users } from "./users";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://dracoon.team/api",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {
  public auth: Auth;
  public config: Config;
  public downloads: Downloads;
  public eventlog: Eventlog;
  public groups: Groups;
  public nodes: Nodes;
  public provisioning: Provisioning;
  public public: Public;
  public resources: Resources;
  public roles: Roles;
  public settings: Settings;
  public shares: Shares;
  public syslog: Syslog;
  public systemAuthConfig: SystemAuthConfig;
  public systemPoliciesConfig: SystemPoliciesConfig;
  public systemSettingsConfig: SystemSettingsConfig;
  public systemStorageConfig: SystemStorageConfig;
  public uploads: Uploads;
  public user: User;
  public users: Users;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.auth = new Auth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.config = new Config(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.downloads = new Downloads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eventlog = new Eventlog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groups = new Groups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.nodes = new Nodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.provisioning = new Provisioning(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.public = new Public(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resources = new Resources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roles = new Roles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shares = new Shares(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.syslog = new Syslog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.systemAuthConfig = new SystemAuthConfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.systemPoliciesConfig = new SystemPoliciesConfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.systemSettingsConfig = new SystemSettingsConfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.systemStorageConfig = new SystemStorageConfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uploads = new Uploads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
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
  }
}
