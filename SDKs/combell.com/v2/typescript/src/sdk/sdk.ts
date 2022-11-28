import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Accounts } from "./accounts";
import { DnsRecords } from "./dnsrecords";
import { Domains } from "./domains";
import { LinuxHostings } from "./linuxhostings";
import { MailZones } from "./mailzones";
import { Mailboxes } from "./mailboxes";
import { MySqlDatabases } from "./mysqldatabases";
import { ProvisioningJobs } from "./provisioningjobs";
import { Ssh } from "./ssh";
import { SslCertificateRequests } from "./sslcertificaterequests";
import { SslCertificates } from "./sslcertificates";
import { Servicepacks } from "./servicepacks";
import { WindowsHostings } from "./windowshostings";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://combell.com/v2",
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
  public accounts: Accounts;
  public dnsRecords: DnsRecords;
  public domains: Domains;
  public linuxHostings: LinuxHostings;
  public mailZones: MailZones;
  public mailboxes: Mailboxes;
  public mySqlDatabases: MySqlDatabases;
  public provisioningJobs: ProvisioningJobs;
  public ssh: Ssh;
  public sslCertificateRequests: SslCertificateRequests;
  public sslCertificates: SslCertificates;
  public servicepacks: Servicepacks;
  public windowsHostings: WindowsHostings;

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
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dnsRecords = new DnsRecords(
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
    
    this.linuxHostings = new LinuxHostings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mailZones = new MailZones(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mailboxes = new Mailboxes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mySqlDatabases = new MySqlDatabases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.provisioningJobs = new ProvisioningJobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ssh = new Ssh(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sslCertificateRequests = new SslCertificateRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sslCertificates = new SslCertificates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicepacks = new Servicepacks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.windowsHostings = new WindowsHostings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
