import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Asps } from "./asps";
import { Channels } from "./channels";
import { Chromeosdevices } from "./chromeosdevices";
import { Customer } from "./customer";
import { Customers } from "./customers";
import { DomainAliases } from "./domainaliases";
import { Domains } from "./domains";
import { Groups } from "./groups";
import { Members } from "./members";
import { Mobiledevices } from "./mobiledevices";
import { Orgunits } from "./orgunits";
import { Privileges } from "./privileges";
import { Resources } from "./resources";
import { RoleAssignments } from "./roleassignments";
import { Roles } from "./roles";
import { Schemas } from "./schemas";
import { Tokens } from "./tokens";
import { TwoStepVerification } from "./twostepverification";
import { Users } from "./users";
import { VerificationCodes } from "./verificationcodes";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://admin.googleapis.com/",
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

/* SDK Documentation: https://developers.google.com/admin-sdk/*/
export class SDK {
  public asps: Asps;
  public channels: Channels;
  public chromeosdevices: Chromeosdevices;
  public customer: Customer;
  public customers: Customers;
  public domainAliases: DomainAliases;
  public domains: Domains;
  public groups: Groups;
  public members: Members;
  public mobiledevices: Mobiledevices;
  public orgunits: Orgunits;
  public privileges: Privileges;
  public resources: Resources;
  public roleAssignments: RoleAssignments;
  public roles: Roles;
  public schemas: Schemas;
  public tokens: Tokens;
  public twoStepVerification: TwoStepVerification;
  public users: Users;
  public verificationCodes: VerificationCodes;

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
    
    this.asps = new Asps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channels = new Channels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chromeosdevices = new Chromeosdevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customer = new Customer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domainAliases = new DomainAliases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domains = new Domains(
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
    
    this.members = new Members(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mobiledevices = new Mobiledevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orgunits = new Orgunits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.privileges = new Privileges(
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
    
    this.roleAssignments = new RoleAssignments(
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
    
    this.schemas = new Schemas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tokens = new Tokens(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.twoStepVerification = new TwoStepVerification(
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
    
    this.verificationCodes = new VerificationCodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
