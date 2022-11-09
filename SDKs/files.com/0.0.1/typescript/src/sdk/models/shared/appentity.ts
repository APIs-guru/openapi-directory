import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppEntityAppTypeEnum {
    Sdk = "sdk"
,    Sso = "sso"
,    RemoteServer = "remote_server"
,    FolderBehavior = "folder_behavior"
,    ClientApp = "client_app"
,    AppIntegration = "app_integration"
}

export enum AppEntityFolderBehaviorTypeEnum {
    Webhook = "webhook"
,    FileExpiration = "file_expiration"
,    AutoEncrypt = "auto_encrypt"
,    LockSubfolders = "lock_subfolders"
,    StorageRegion = "storage_region"
,    ServePublicly = "serve_publicly"
,    CreateUserFolders = "create_user_folders"
,    RemoteServerSync = "remote_server_sync"
,    Inbox = "inbox"
,    AppendTimestamp = "append_timestamp"
,    LimitFileExtensions = "limit_file_extensions"
,    LimitFileRegex = "limit_file_regex"
,    AmazonSns = "amazon_sns"
,    Watermark = "watermark"
,    RemoteServerMount = "remote_server_mount"
,    SlackWebhook = "slack_webhook"
}

export enum AppEntityRemoteServerTypeEnum {
    Ftp = "ftp"
,    Sftp = "sftp"
,    S3 = "s3"
,    GoogleCloudStorage = "google_cloud_storage"
,    Webdav = "webdav"
,    Wasabi = "wasabi"
,    BackblazeB2 = "backblaze_b2"
,    OneDrive = "one_drive"
,    Rackspace = "rackspace"
,    Box = "box"
,    Dropbox = "dropbox"
,    GoogleDrive = "google_drive"
,    Azure = "azure"
,    Sharepoint = "sharepoint"
,    S3Compatible = "s3_compatible"
}

export enum AppEntitySsoStrategyTypeEnum {
    Google = "google"
,    Auth0 = "auth0"
,    Okta = "okta"
,    Atlassian = "atlassian"
,    Azure = "azure"
,    Box = "box"
,    Dropbox = "dropbox"
,    Slack = "slack"
,    UnusedUbuntu = "_unused_ubuntu"
,    Onelogin = "onelogin"
,    Saml = "saml"
,    Idaptive = "idaptive"
,    Ldap = "ldap"
,    Scim = "scim"
}


// AppEntity
/** 
 * List Apps
**/
export class AppEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_type" })
  appType?: AppEntityAppTypeEnum;

  @Metadata({ data: "json, name=documentation_links" })
  documentationLinks?: string;

  @Metadata({ data: "json, name=extended_description" })
  extendedDescription?: string;

  @Metadata({ data: "json, name=external_homepage_url" })
  externalHomepageUrl?: string;

  @Metadata({ data: "json, name=featured" })
  featured?: boolean;

  @Metadata({ data: "json, name=folder_behavior_type" })
  folderBehaviorType?: AppEntityFolderBehaviorTypeEnum;

  @Metadata({ data: "json, name=icon_url" })
  iconUrl?: string;

  @Metadata({ data: "json, name=logo_thumbnail_url" })
  logoThumbnailUrl?: string;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @Metadata({ data: "json, name=marketing_youtube_url" })
  marketingYoutubeUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=remote_server_type" })
  remoteServerType?: AppEntityRemoteServerTypeEnum;

  @Metadata({ data: "json, name=screenshot_list_urls" })
  screenshotListUrls?: string;

  @Metadata({ data: "json, name=short_description" })
  shortDescription?: string;

  @Metadata({ data: "json, name=sso_strategy_type" })
  ssoStrategyType?: AppEntitySsoStrategyTypeEnum;

  @Metadata({ data: "json, name=tutorial_youtube_url" })
  tutorialYoutubeUrl?: string;
}
