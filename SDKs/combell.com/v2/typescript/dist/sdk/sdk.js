import axios from "axios";
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
export var ServerList = [
    "https://combell.com/v2",
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
        this.accounts = new Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dnsRecords = new DnsRecords(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.domains = new Domains(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.linuxHostings = new LinuxHostings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mailZones = new MailZones(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mailboxes = new Mailboxes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mySqlDatabases = new MySqlDatabases(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.provisioningJobs = new ProvisioningJobs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ssh = new Ssh(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sslCertificateRequests = new SslCertificateRequests(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sslCertificates = new SslCertificates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.servicepacks = new Servicepacks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.windowsHostings = new WindowsHostings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
