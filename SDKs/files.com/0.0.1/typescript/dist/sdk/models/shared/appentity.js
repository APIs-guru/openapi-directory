var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var AppEntityAppTypeEnum;
(function (AppEntityAppTypeEnum) {
    AppEntityAppTypeEnum["Sdk"] = "sdk";
    AppEntityAppTypeEnum["Sso"] = "sso";
    AppEntityAppTypeEnum["RemoteServer"] = "remote_server";
    AppEntityAppTypeEnum["FolderBehavior"] = "folder_behavior";
    AppEntityAppTypeEnum["ClientApp"] = "client_app";
    AppEntityAppTypeEnum["AppIntegration"] = "app_integration";
})(AppEntityAppTypeEnum || (AppEntityAppTypeEnum = {}));
export var AppEntityFolderBehaviorTypeEnum;
(function (AppEntityFolderBehaviorTypeEnum) {
    AppEntityFolderBehaviorTypeEnum["Webhook"] = "webhook";
    AppEntityFolderBehaviorTypeEnum["FileExpiration"] = "file_expiration";
    AppEntityFolderBehaviorTypeEnum["AutoEncrypt"] = "auto_encrypt";
    AppEntityFolderBehaviorTypeEnum["LockSubfolders"] = "lock_subfolders";
    AppEntityFolderBehaviorTypeEnum["StorageRegion"] = "storage_region";
    AppEntityFolderBehaviorTypeEnum["ServePublicly"] = "serve_publicly";
    AppEntityFolderBehaviorTypeEnum["CreateUserFolders"] = "create_user_folders";
    AppEntityFolderBehaviorTypeEnum["RemoteServerSync"] = "remote_server_sync";
    AppEntityFolderBehaviorTypeEnum["Inbox"] = "inbox";
    AppEntityFolderBehaviorTypeEnum["AppendTimestamp"] = "append_timestamp";
    AppEntityFolderBehaviorTypeEnum["LimitFileExtensions"] = "limit_file_extensions";
    AppEntityFolderBehaviorTypeEnum["LimitFileRegex"] = "limit_file_regex";
    AppEntityFolderBehaviorTypeEnum["AmazonSns"] = "amazon_sns";
    AppEntityFolderBehaviorTypeEnum["Watermark"] = "watermark";
    AppEntityFolderBehaviorTypeEnum["RemoteServerMount"] = "remote_server_mount";
    AppEntityFolderBehaviorTypeEnum["SlackWebhook"] = "slack_webhook";
})(AppEntityFolderBehaviorTypeEnum || (AppEntityFolderBehaviorTypeEnum = {}));
export var AppEntityRemoteServerTypeEnum;
(function (AppEntityRemoteServerTypeEnum) {
    AppEntityRemoteServerTypeEnum["Ftp"] = "ftp";
    AppEntityRemoteServerTypeEnum["Sftp"] = "sftp";
    AppEntityRemoteServerTypeEnum["S3"] = "s3";
    AppEntityRemoteServerTypeEnum["GoogleCloudStorage"] = "google_cloud_storage";
    AppEntityRemoteServerTypeEnum["Webdav"] = "webdav";
    AppEntityRemoteServerTypeEnum["Wasabi"] = "wasabi";
    AppEntityRemoteServerTypeEnum["BackblazeB2"] = "backblaze_b2";
    AppEntityRemoteServerTypeEnum["OneDrive"] = "one_drive";
    AppEntityRemoteServerTypeEnum["Rackspace"] = "rackspace";
    AppEntityRemoteServerTypeEnum["Box"] = "box";
    AppEntityRemoteServerTypeEnum["Dropbox"] = "dropbox";
    AppEntityRemoteServerTypeEnum["GoogleDrive"] = "google_drive";
    AppEntityRemoteServerTypeEnum["Azure"] = "azure";
    AppEntityRemoteServerTypeEnum["Sharepoint"] = "sharepoint";
    AppEntityRemoteServerTypeEnum["S3Compatible"] = "s3_compatible";
})(AppEntityRemoteServerTypeEnum || (AppEntityRemoteServerTypeEnum = {}));
export var AppEntitySsoStrategyTypeEnum;
(function (AppEntitySsoStrategyTypeEnum) {
    AppEntitySsoStrategyTypeEnum["Google"] = "google";
    AppEntitySsoStrategyTypeEnum["Auth0"] = "auth0";
    AppEntitySsoStrategyTypeEnum["Okta"] = "okta";
    AppEntitySsoStrategyTypeEnum["Atlassian"] = "atlassian";
    AppEntitySsoStrategyTypeEnum["Azure"] = "azure";
    AppEntitySsoStrategyTypeEnum["Box"] = "box";
    AppEntitySsoStrategyTypeEnum["Dropbox"] = "dropbox";
    AppEntitySsoStrategyTypeEnum["Slack"] = "slack";
    AppEntitySsoStrategyTypeEnum["UnusedUbuntu"] = "_unused_ubuntu";
    AppEntitySsoStrategyTypeEnum["Onelogin"] = "onelogin";
    AppEntitySsoStrategyTypeEnum["Saml"] = "saml";
    AppEntitySsoStrategyTypeEnum["Idaptive"] = "idaptive";
    AppEntitySsoStrategyTypeEnum["Ldap"] = "ldap";
    AppEntitySsoStrategyTypeEnum["Scim"] = "scim";
})(AppEntitySsoStrategyTypeEnum || (AppEntitySsoStrategyTypeEnum = {}));
// AppEntity
/**
 * List Apps
**/
var AppEntity = /** @class */ (function (_super) {
    __extends(AppEntity, _super);
    function AppEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_type" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "appType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_links" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "documentationLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extended_description" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "extendedDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_homepage_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "externalHomepageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured" }),
        __metadata("design:type", Boolean)
    ], AppEntity.prototype, "featured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder_behavior_type" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "folderBehaviorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_thumbnail_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "logoThumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketing_youtube_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "marketingYoutubeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remote_server_type" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "remoteServerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenshot_list_urls" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "screenshotListUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=short_description" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sso_strategy_type" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "ssoStrategyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tutorial_youtube_url" }),
        __metadata("design:type", String)
    ], AppEntity.prototype, "tutorialYoutubeUrl", void 0);
    return AppEntity;
}(SpeakeasyBase));
export { AppEntity };
