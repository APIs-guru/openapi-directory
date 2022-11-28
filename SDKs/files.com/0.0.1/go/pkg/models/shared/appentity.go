package shared

type AppEntityAppTypeEnum string

const (
	AppEntityAppTypeEnumSdk            AppEntityAppTypeEnum = "sdk"
	AppEntityAppTypeEnumSso            AppEntityAppTypeEnum = "sso"
	AppEntityAppTypeEnumRemoteServer   AppEntityAppTypeEnum = "remote_server"
	AppEntityAppTypeEnumFolderBehavior AppEntityAppTypeEnum = "folder_behavior"
	AppEntityAppTypeEnumClientApp      AppEntityAppTypeEnum = "client_app"
	AppEntityAppTypeEnumAppIntegration AppEntityAppTypeEnum = "app_integration"
)

type AppEntityFolderBehaviorTypeEnum string

const (
	AppEntityFolderBehaviorTypeEnumWebhook             AppEntityFolderBehaviorTypeEnum = "webhook"
	AppEntityFolderBehaviorTypeEnumFileExpiration      AppEntityFolderBehaviorTypeEnum = "file_expiration"
	AppEntityFolderBehaviorTypeEnumAutoEncrypt         AppEntityFolderBehaviorTypeEnum = "auto_encrypt"
	AppEntityFolderBehaviorTypeEnumLockSubfolders      AppEntityFolderBehaviorTypeEnum = "lock_subfolders"
	AppEntityFolderBehaviorTypeEnumStorageRegion       AppEntityFolderBehaviorTypeEnum = "storage_region"
	AppEntityFolderBehaviorTypeEnumServePublicly       AppEntityFolderBehaviorTypeEnum = "serve_publicly"
	AppEntityFolderBehaviorTypeEnumCreateUserFolders   AppEntityFolderBehaviorTypeEnum = "create_user_folders"
	AppEntityFolderBehaviorTypeEnumRemoteServerSync    AppEntityFolderBehaviorTypeEnum = "remote_server_sync"
	AppEntityFolderBehaviorTypeEnumInbox               AppEntityFolderBehaviorTypeEnum = "inbox"
	AppEntityFolderBehaviorTypeEnumAppendTimestamp     AppEntityFolderBehaviorTypeEnum = "append_timestamp"
	AppEntityFolderBehaviorTypeEnumLimitFileExtensions AppEntityFolderBehaviorTypeEnum = "limit_file_extensions"
	AppEntityFolderBehaviorTypeEnumLimitFileRegex      AppEntityFolderBehaviorTypeEnum = "limit_file_regex"
	AppEntityFolderBehaviorTypeEnumAmazonSns           AppEntityFolderBehaviorTypeEnum = "amazon_sns"
	AppEntityFolderBehaviorTypeEnumWatermark           AppEntityFolderBehaviorTypeEnum = "watermark"
	AppEntityFolderBehaviorTypeEnumRemoteServerMount   AppEntityFolderBehaviorTypeEnum = "remote_server_mount"
	AppEntityFolderBehaviorTypeEnumSlackWebhook        AppEntityFolderBehaviorTypeEnum = "slack_webhook"
)

type AppEntityRemoteServerTypeEnum string

const (
	AppEntityRemoteServerTypeEnumFtp                AppEntityRemoteServerTypeEnum = "ftp"
	AppEntityRemoteServerTypeEnumSftp               AppEntityRemoteServerTypeEnum = "sftp"
	AppEntityRemoteServerTypeEnumS3                 AppEntityRemoteServerTypeEnum = "s3"
	AppEntityRemoteServerTypeEnumGoogleCloudStorage AppEntityRemoteServerTypeEnum = "google_cloud_storage"
	AppEntityRemoteServerTypeEnumWebdav             AppEntityRemoteServerTypeEnum = "webdav"
	AppEntityRemoteServerTypeEnumWasabi             AppEntityRemoteServerTypeEnum = "wasabi"
	AppEntityRemoteServerTypeEnumBackblazeB2        AppEntityRemoteServerTypeEnum = "backblaze_b2"
	AppEntityRemoteServerTypeEnumOneDrive           AppEntityRemoteServerTypeEnum = "one_drive"
	AppEntityRemoteServerTypeEnumRackspace          AppEntityRemoteServerTypeEnum = "rackspace"
	AppEntityRemoteServerTypeEnumBox                AppEntityRemoteServerTypeEnum = "box"
	AppEntityRemoteServerTypeEnumDropbox            AppEntityRemoteServerTypeEnum = "dropbox"
	AppEntityRemoteServerTypeEnumGoogleDrive        AppEntityRemoteServerTypeEnum = "google_drive"
	AppEntityRemoteServerTypeEnumAzure              AppEntityRemoteServerTypeEnum = "azure"
	AppEntityRemoteServerTypeEnumSharepoint         AppEntityRemoteServerTypeEnum = "sharepoint"
	AppEntityRemoteServerTypeEnumS3Compatible       AppEntityRemoteServerTypeEnum = "s3_compatible"
)

type AppEntitySsoStrategyTypeEnum string

const (
	AppEntitySsoStrategyTypeEnumGoogle       AppEntitySsoStrategyTypeEnum = "google"
	AppEntitySsoStrategyTypeEnumAuth0        AppEntitySsoStrategyTypeEnum = "auth0"
	AppEntitySsoStrategyTypeEnumOkta         AppEntitySsoStrategyTypeEnum = "okta"
	AppEntitySsoStrategyTypeEnumAtlassian    AppEntitySsoStrategyTypeEnum = "atlassian"
	AppEntitySsoStrategyTypeEnumAzure        AppEntitySsoStrategyTypeEnum = "azure"
	AppEntitySsoStrategyTypeEnumBox          AppEntitySsoStrategyTypeEnum = "box"
	AppEntitySsoStrategyTypeEnumDropbox      AppEntitySsoStrategyTypeEnum = "dropbox"
	AppEntitySsoStrategyTypeEnumSlack        AppEntitySsoStrategyTypeEnum = "slack"
	AppEntitySsoStrategyTypeEnumUnusedUbuntu AppEntitySsoStrategyTypeEnum = "_unused_ubuntu"
	AppEntitySsoStrategyTypeEnumOnelogin     AppEntitySsoStrategyTypeEnum = "onelogin"
	AppEntitySsoStrategyTypeEnumSaml         AppEntitySsoStrategyTypeEnum = "saml"
	AppEntitySsoStrategyTypeEnumIdaptive     AppEntitySsoStrategyTypeEnum = "idaptive"
	AppEntitySsoStrategyTypeEnumLdap         AppEntitySsoStrategyTypeEnum = "ldap"
	AppEntitySsoStrategyTypeEnumScim         AppEntitySsoStrategyTypeEnum = "scim"
)

// AppEntity
// List Apps
type AppEntity struct {
	AppType             *AppEntityAppTypeEnum            `json:"app_type,omitempty"`
	DocumentationLinks  *string                          `json:"documentation_links,omitempty"`
	ExtendedDescription *string                          `json:"extended_description,omitempty"`
	ExternalHomepageURL *string                          `json:"external_homepage_url,omitempty"`
	Featured            *bool                            `json:"featured,omitempty"`
	FolderBehaviorType  *AppEntityFolderBehaviorTypeEnum `json:"folder_behavior_type,omitempty"`
	IconURL             *string                          `json:"icon_url,omitempty"`
	LogoThumbnailURL    *string                          `json:"logo_thumbnail_url,omitempty"`
	LogoURL             *string                          `json:"logo_url,omitempty"`
	MarketingYoutubeURL *string                          `json:"marketing_youtube_url,omitempty"`
	Name                *string                          `json:"name,omitempty"`
	RemoteServerType    *AppEntityRemoteServerTypeEnum   `json:"remote_server_type,omitempty"`
	ScreenshotListUrls  *string                          `json:"screenshot_list_urls,omitempty"`
	ShortDescription    *string                          `json:"short_description,omitempty"`
	SsoStrategyType     *AppEntitySsoStrategyTypeEnum    `json:"sso_strategy_type,omitempty"`
	TutorialYoutubeURL  *string                          `json:"tutorial_youtube_url,omitempty"`
}
