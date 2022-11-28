import axios from "axios";
import * as utils from "../internal/utils";
import { ActionNotificationExportResults } from "./actionnotificationexportresults";
import { ActionNotificationExports } from "./actionnotificationexports";
import { ActionWebhookFailures } from "./actionwebhookfailures";
import { ApiKey } from "./apikey";
import { ApiKeys } from "./apikeys";
import { Apps } from "./apps";
import { As2Keys } from "./as2keys";
import { Automations } from "./automations";
import { BandwidthSnapshots } from "./bandwidthsnapshots";
import { Behaviors } from "./behaviors";
import { BundleDownloads } from "./bundledownloads";
import { BundleRecipients } from "./bundlerecipients";
import { BundleRegistrations } from "./bundleregistrations";
import { Bundles } from "./bundles";
import { Clickwraps } from "./clickwraps";
import { DnsRecords } from "./dnsrecords";
import { ExternalEvents } from "./externalevents";
import { FileActions } from "./fileactions";
import { FileCommentReactions } from "./filecommentreactions";
import { FileComments } from "./filecomments";
import { FileMigrations } from "./filemigrations";
import { Files } from "./files";
import { Folders } from "./folders";
import { FormFieldSets } from "./formfieldsets";
import { GroupUsers } from "./groupusers";
import { Groups } from "./groups";
import { History } from "./history";
import { HistoryExportResults } from "./historyexportresults";
import { HistoryExports } from "./historyexports";
import { InboxRecipients } from "./inboxrecipients";
import { InboxRegistrations } from "./inboxregistrations";
import { InboxUploads } from "./inboxuploads";
import { Invoices } from "./invoices";
import { IpAddresses } from "./ipaddresses";
import { Locks } from "./locks";
import { MessageCommentReactions } from "./messagecommentreactions";
import { MessageComments } from "./messagecomments";
import { MessageReactions } from "./messagereactions";
import { Messages } from "./messages";
import { Notifications } from "./notifications";
import { Payments } from "./payments";
import { Permissions } from "./permissions";
import { Projects } from "./projects";
import { PublicKeys } from "./publickeys";
import { RemoteServers } from "./remoteservers";
import { Requests } from "./requests";
import { Sessions } from "./sessions";
import { SettingsChanges } from "./settingschanges";
import { Site } from "./site";
import { SsoStrategies } from "./ssostrategies";
import { Styles } from "./styles";
import { SyncJobs } from "./syncjobs";
import { UsageDailySnapshots } from "./usagedailysnapshots";
import { UsageSnapshots } from "./usagesnapshots";
import { User } from "./user";
import { UserCipherUses } from "./usercipheruses";
import { UserRequests } from "./userrequests";
import { Users } from "./users";
import { WebhookTests } from "./webhooktests";
export var ServerList = [
    "https://files.com//app.files.com/api/rest/v1",
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
        this.actionNotificationExportResults = new ActionNotificationExportResults(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.actionNotificationExports = new ActionNotificationExports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.actionWebhookFailures = new ActionWebhookFailures(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.apiKey = new ApiKey(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.apiKeys = new ApiKeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.apps = new Apps(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.as2Keys = new As2Keys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.automations = new Automations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bandwidthSnapshots = new BandwidthSnapshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.behaviors = new Behaviors(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bundleDownloads = new BundleDownloads(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bundleRecipients = new BundleRecipients(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bundleRegistrations = new BundleRegistrations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bundles = new Bundles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.clickwraps = new Clickwraps(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dnsRecords = new DnsRecords(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.externalEvents = new ExternalEvents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileActions = new FileActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileCommentReactions = new FileCommentReactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileComments = new FileComments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileMigrations = new FileMigrations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.files = new Files(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.folders = new Folders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.formFieldSets = new FormFieldSets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupUsers = new GroupUsers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groups = new Groups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.history = new History(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.historyExportResults = new HistoryExportResults(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.historyExports = new HistoryExports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inboxRecipients = new InboxRecipients(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inboxRegistrations = new InboxRegistrations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inboxUploads = new InboxUploads(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.invoices = new Invoices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ipAddresses = new IpAddresses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.locks = new Locks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messageCommentReactions = new MessageCommentReactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messageComments = new MessageComments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messageReactions = new MessageReactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messages = new Messages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.notifications = new Notifications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.payments = new Payments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.permissions = new Permissions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projects = new Projects(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.publicKeys = new PublicKeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.remoteServers = new RemoteServers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.requests = new Requests(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sessions = new Sessions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.settingsChanges = new SettingsChanges(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.site = new Site(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ssoStrategies = new SsoStrategies(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.styles = new Styles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.syncJobs = new SyncJobs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usageDailySnapshots = new UsageDailySnapshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usageSnapshots = new UsageSnapshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.user = new User(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userCipherUses = new UserCipherUses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userRequests = new UserRequests(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.webhookTests = new WebhookTests(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
