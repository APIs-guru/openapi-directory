

import requests

from . import utils

from .action_notification_export_results import ActionNotificationExportResults
from .action_notification_exports import ActionNotificationExports
from .action_webhook_failures import ActionWebhookFailures
from .api_key import APIKey
from .api_keys import APIKeys
from .apps import Apps
from .as2_keys import As2Keys
from .automations import Automations
from .bandwidth_snapshots import BandwidthSnapshots
from .behaviors import Behaviors
from .bundle_downloads import BundleDownloads
from .bundle_recipients import BundleRecipients
from .bundle_registrations import BundleRegistrations
from .bundles import Bundles
from .clickwraps import Clickwraps
from .dns_records import DNSRecords
from .external_events import ExternalEvents
from .file_actions import FileActions
from .file_comment_reactions import FileCommentReactions
from .file_comments import FileComments
from .file_migrations import FileMigrations
from .files import Files
from .folders import Folders
from .form_field_sets import FormFieldSets
from .group_users import GroupUsers
from .groups import Groups
from .history import History
from .history_export_results import HistoryExportResults
from .history_exports import HistoryExports
from .inbox_recipients import InboxRecipients
from .inbox_registrations import InboxRegistrations
from .inbox_uploads import InboxUploads
from .invoices import Invoices
from .ip_addresses import IPAddresses
from .locks import Locks
from .message_comment_reactions import MessageCommentReactions
from .message_comments import MessageComments
from .message_reactions import MessageReactions
from .messages import Messages
from .notifications import Notifications
from .payments import Payments
from .permissions import Permissions
from .projects import Projects
from .public_keys import PublicKeys
from .remote_servers import RemoteServers
from .requests import Requests
from .sessions import Sessions
from .settings_changes import SettingsChanges
from .site import Site
from .sso_strategies import SsoStrategies
from .styles import Styles
from .sync_jobs import SyncJobs
from .usage_daily_snapshots import UsageDailySnapshots
from .usage_snapshots import UsageSnapshots
from .user import User
from .user_cipher_uses import UserCipherUses
from .user_requests import UserRequests
from .users import Users
from .webhook_tests import WebhookTests


SERVERS = [
	"https://files.com//app.files.com/api/rest/v1",
]


class SDK:
    
    action_notification_export_results: ActionNotificationExportResults
    action_notification_exports: ActionNotificationExports
    action_webhook_failures: ActionWebhookFailures
    api_key: APIKey
    api_keys: APIKeys
    apps: Apps
    as2_keys: As2Keys
    automations: Automations
    bandwidth_snapshots: BandwidthSnapshots
    behaviors: Behaviors
    bundle_downloads: BundleDownloads
    bundle_recipients: BundleRecipients
    bundle_registrations: BundleRegistrations
    bundles: Bundles
    clickwraps: Clickwraps
    dns_records: DNSRecords
    external_events: ExternalEvents
    file_actions: FileActions
    file_comment_reactions: FileCommentReactions
    file_comments: FileComments
    file_migrations: FileMigrations
    files: Files
    folders: Folders
    form_field_sets: FormFieldSets
    group_users: GroupUsers
    groups: Groups
    history: History
    history_export_results: HistoryExportResults
    history_exports: HistoryExports
    inbox_recipients: InboxRecipients
    inbox_registrations: InboxRegistrations
    inbox_uploads: InboxUploads
    invoices: Invoices
    ip_addresses: IPAddresses
    locks: Locks
    message_comment_reactions: MessageCommentReactions
    message_comments: MessageComments
    message_reactions: MessageReactions
    messages: Messages
    notifications: Notifications
    payments: Payments
    permissions: Permissions
    projects: Projects
    public_keys: PublicKeys
    remote_servers: RemoteServers
    requests: Requests
    sessions: Sessions
    settings_changes: SettingsChanges
    site: Site
    sso_strategies: SsoStrategies
    styles: Styles
    sync_jobs: SyncJobs
    usage_daily_snapshots: UsageDailySnapshots
    usage_snapshots: UsageSnapshots
    user: User
    user_cipher_uses: UserCipherUses
    user_requests: UserRequests
    users: Users
    webhook_tests: WebhookTests

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.action_notification_export_results = ActionNotificationExportResults(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.action_notification_exports = ActionNotificationExports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.action_webhook_failures = ActionWebhookFailures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.api_key = APIKey(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.api_keys = APIKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.apps = Apps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.as2_keys = As2Keys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.automations = Automations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bandwidth_snapshots = BandwidthSnapshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.behaviors = Behaviors(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bundle_downloads = BundleDownloads(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bundle_recipients = BundleRecipients(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bundle_registrations = BundleRegistrations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bundles = Bundles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.clickwraps = Clickwraps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dns_records = DNSRecords(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.external_events = ExternalEvents(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_actions = FileActions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_comment_reactions = FileCommentReactions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_comments = FileComments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_migrations = FileMigrations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.files = Files(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.folders = Folders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.form_field_sets = FormFieldSets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.group_users = GroupUsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups = Groups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.history = History(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.history_export_results = HistoryExportResults(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.history_exports = HistoryExports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inbox_recipients = InboxRecipients(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inbox_registrations = InboxRegistrations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inbox_uploads = InboxUploads(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoices = Invoices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ip_addresses = IPAddresses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.locks = Locks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.message_comment_reactions = MessageCommentReactions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.message_comments = MessageComments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.message_reactions = MessageReactions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.messages = Messages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.notifications = Notifications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payments = Payments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.permissions = Permissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects = Projects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.public_keys = PublicKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.remote_servers = RemoteServers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.requests = Requests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sessions = Sessions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.settings_changes = SettingsChanges(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.site = Site(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sso_strategies = SsoStrategies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.styles = Styles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sync_jobs = SyncJobs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.usage_daily_snapshots = UsageDailySnapshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.usage_snapshots = UsageSnapshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user = User(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_cipher_uses = UserCipherUses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_requests = UserRequests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users = Users(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.webhook_tests = WebhookTests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    