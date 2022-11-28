import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppEntityAppTypeEnum {
    Sdk = "sdk",
    Sso = "sso",
    RemoteServer = "remote_server",
    FolderBehavior = "folder_behavior",
    ClientApp = "client_app",
    AppIntegration = "app_integration"
}
export declare enum AppEntityFolderBehaviorTypeEnum {
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
export declare enum AppEntityRemoteServerTypeEnum {
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
export declare enum AppEntitySsoStrategyTypeEnum {
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
/**
 * List Apps
**/
export declare class AppEntity extends SpeakeasyBase {
    appType?: AppEntityAppTypeEnum;
    documentationLinks?: string;
    extendedDescription?: string;
    externalHomepageUrl?: string;
    featured?: boolean;
    folderBehaviorType?: AppEntityFolderBehaviorTypeEnum;
    iconUrl?: string;
    logoThumbnailUrl?: string;
    logoUrl?: string;
    marketingYoutubeUrl?: string;
    name?: string;
    remoteServerType?: AppEntityRemoteServerTypeEnum;
    screenshotListUrls?: string;
    shortDescription?: string;
    ssoStrategyType?: AppEntitySsoStrategyTypeEnum;
    tutorialYoutubeUrl?: string;
}
