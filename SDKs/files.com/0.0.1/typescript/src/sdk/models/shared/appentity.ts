import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppEntityAppTypeEnum {
    Sdk = "sdk",
    Sso = "sso",
    RemoteServer = "remote_server",
    FolderBehavior = "folder_behavior",
    ClientApp = "client_app",
    AppIntegration = "app_integration"
}

export enum AppEntityFolderBehaviorTypeEnum {
    Webhook = "webhook",
    FileExpiration = "file_expiration",
    AutoEncrypt = "auto_encrypt",
    LockSubfolders = "lock_subfolders",
    StorageRegion = "storage_region",
    ServePublicly = "serve_publicly",
    CreateUserFolders = "create_user_folders",
    RemoteServerSync = "remote_server_sync",
    Inbox = "inbox",
    AppendTimestamp = "append_timestamp",
    LimitFileExtensions = "limit_file_extensions",
    LimitFileRegex = "limit_file_regex",
    AmazonSns = "amazon_sns",
    Watermark = "watermark",
    RemoteServerMount = "remote_server_mount",
    SlackWebhook = "slack_webhook"
}

export enum AppEntityRemoteServerTypeEnum {
    Ftp = "ftp",
    Sftp = "sftp",
    S3 = "s3",
    GoogleCloudStorage = "google_cloud_storage",
    Webdav = "webdav",
    Wasabi = "wasabi",
    BackblazeB2 = "backblaze_b2",
    OneDrive = "one_drive",
    Rackspace = "rackspace",
    Box = "box",
    Dropbox = "dropbox",
    GoogleDrive = "google_drive",
    Azure = "azure",
    Sharepoint = "sharepoint",
    S3Compatible = "s3_compatible"
}

export enum AppEntitySsoStrategyTypeEnum {
    Google = "google",
    Auth0 = "auth0",
    Okta = "okta",
    Atlassian = "atlassian",
    Azure = "azure",
    Box = "box",
    Dropbox = "dropbox",
    Slack = "slack",
    UnusedUbuntu = "_unused_ubuntu",
    Onelogin = "onelogin",
    Saml = "saml",
    Idaptive = "idaptive",
    Ldap = "ldap",
    Scim = "scim"
}


// AppEntity
/** 
 * List Apps
**/
export class AppEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_type" })
  appType?: AppEntityAppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=documentation_links" })
  documentationLinks?: string;

  @SpeakeasyMetadata({ data: "json, name=extended_description" })
  extendedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=external_homepage_url" })
  externalHomepageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=folder_behavior_type" })
  folderBehaviorType?: AppEntityFolderBehaviorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=icon_url" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_thumbnail_url" })
  logoThumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=marketing_youtube_url" })
  marketingYoutubeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=remote_server_type" })
  remoteServerType?: AppEntityRemoteServerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=screenshot_list_urls" })
  screenshotListUrls?: string;

  @SpeakeasyMetadata({ data: "json, name=short_description" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sso_strategy_type" })
  ssoStrategyType?: AppEntitySsoStrategyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tutorial_youtube_url" })
  tutorialYoutubeUrl?: string;
}
