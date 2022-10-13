from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AppEntityAppTypeEnum(str, Enum):
    SDK = "sdk"
    SSO = "sso"
    REMOTE_SERVER = "remote_server"
    FOLDER_BEHAVIOR = "folder_behavior"
    CLIENT_APP = "client_app"
    APP_INTEGRATION = "app_integration"

class AppEntityFolderBehaviorTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    FILE_EXPIRATION = "file_expiration"
    AUTO_ENCRYPT = "auto_encrypt"
    LOCK_SUBFOLDERS = "lock_subfolders"
    STORAGE_REGION = "storage_region"
    SERVE_PUBLICLY = "serve_publicly"
    CREATE_USER_FOLDERS = "create_user_folders"
    REMOTE_SERVER_SYNC = "remote_server_sync"
    INBOX = "inbox"
    APPEND_TIMESTAMP = "append_timestamp"
    LIMIT_FILE_EXTENSIONS = "limit_file_extensions"
    LIMIT_FILE_REGEX = "limit_file_regex"
    AMAZON_SNS = "amazon_sns"
    WATERMARK = "watermark"
    REMOTE_SERVER_MOUNT = "remote_server_mount"
    SLACK_WEBHOOK = "slack_webhook"

class AppEntityRemoteServerTypeEnum(str, Enum):
    FTP = "ftp"
    SFTP = "sftp"
    S3 = "s3"
    GOOGLE_CLOUD_STORAGE = "google_cloud_storage"
    WEBDAV = "webdav"
    WASABI = "wasabi"
    BACKBLAZE_B2 = "backblaze_b2"
    ONE_DRIVE = "one_drive"
    RACKSPACE = "rackspace"
    BOX = "box"
    DROPBOX = "dropbox"
    GOOGLE_DRIVE = "google_drive"
    AZURE = "azure"
    SHAREPOINT = "sharepoint"
    S3_COMPATIBLE = "s3_compatible"

class AppEntitySsoStrategyTypeEnum(str, Enum):
    GOOGLE = "google"
    AUTH0 = "auth0"
    OKTA = "okta"
    ATLASSIAN = "atlassian"
    AZURE = "azure"
    BOX = "box"
    DROPBOX = "dropbox"
    SLACK = "slack"
    UNUSED_UBUNTU = "_unused_ubuntu"
    ONELOGIN = "onelogin"
    SAML = "saml"
    IDAPTIVE = "idaptive"
    LDAP = "ldap"
    SCIM = "scim"


@dataclass_json
@dataclass
class AppEntity:
    app_type: Optional[AppEntityAppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_type' }})
    documentation_links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_links' }})
    extended_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extended_description' }})
    external_homepage_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_homepage_url' }})
    featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured' }})
    folder_behavior_type: Optional[AppEntityFolderBehaviorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder_behavior_type' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_url' }})
    logo_thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_thumbnail_url' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    marketing_youtube_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketing_youtube_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    remote_server_type: Optional[AppEntityRemoteServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_server_type' }})
    screenshot_list_urls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshot_list_urls' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_description' }})
    sso_strategy_type: Optional[AppEntitySsoStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sso_strategy_type' }})
    tutorial_youtube_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tutorial_youtube_url' }})
    
