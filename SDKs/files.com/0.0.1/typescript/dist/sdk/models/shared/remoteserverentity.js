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
export var RemoteServerEntityAuthStatusEnum;
(function (RemoteServerEntityAuthStatusEnum) {
    RemoteServerEntityAuthStatusEnum["NotApplicable"] = "not_applicable";
    RemoteServerEntityAuthStatusEnum["InSetup"] = "in_setup";
    RemoteServerEntityAuthStatusEnum["Complete"] = "complete";
    RemoteServerEntityAuthStatusEnum["Reauthenticate"] = "reauthenticate";
})(RemoteServerEntityAuthStatusEnum || (RemoteServerEntityAuthStatusEnum = {}));
export var RemoteServerEntityOneDriveAccountTypeEnum;
(function (RemoteServerEntityOneDriveAccountTypeEnum) {
    RemoteServerEntityOneDriveAccountTypeEnum["Personal"] = "personal";
    RemoteServerEntityOneDriveAccountTypeEnum["BusinessOther"] = "business_other";
})(RemoteServerEntityOneDriveAccountTypeEnum || (RemoteServerEntityOneDriveAccountTypeEnum = {}));
export var RemoteServerEntityServerCertificateEnum;
(function (RemoteServerEntityServerCertificateEnum) {
    RemoteServerEntityServerCertificateEnum["RequireMatch"] = "require_match";
    RemoteServerEntityServerCertificateEnum["AllowAny"] = "allow_any";
})(RemoteServerEntityServerCertificateEnum || (RemoteServerEntityServerCertificateEnum = {}));
export var RemoteServerEntityServerTypeEnum;
(function (RemoteServerEntityServerTypeEnum) {
    RemoteServerEntityServerTypeEnum["Ftp"] = "ftp";
    RemoteServerEntityServerTypeEnum["Sftp"] = "sftp";
    RemoteServerEntityServerTypeEnum["S3"] = "s3";
    RemoteServerEntityServerTypeEnum["GoogleCloudStorage"] = "google_cloud_storage";
    RemoteServerEntityServerTypeEnum["Webdav"] = "webdav";
    RemoteServerEntityServerTypeEnum["Wasabi"] = "wasabi";
    RemoteServerEntityServerTypeEnum["BackblazeB2"] = "backblaze_b2";
    RemoteServerEntityServerTypeEnum["OneDrive"] = "one_drive";
    RemoteServerEntityServerTypeEnum["Rackspace"] = "rackspace";
    RemoteServerEntityServerTypeEnum["Box"] = "box";
    RemoteServerEntityServerTypeEnum["Dropbox"] = "dropbox";
    RemoteServerEntityServerTypeEnum["GoogleDrive"] = "google_drive";
    RemoteServerEntityServerTypeEnum["Azure"] = "azure";
    RemoteServerEntityServerTypeEnum["Sharepoint"] = "sharepoint";
    RemoteServerEntityServerTypeEnum["S3Compatible"] = "s3_compatible";
})(RemoteServerEntityServerTypeEnum || (RemoteServerEntityServerTypeEnum = {}));
export var RemoteServerEntitySslEnum;
(function (RemoteServerEntitySslEnum) {
    RemoteServerEntitySslEnum["IfAvailable"] = "if_available";
    RemoteServerEntitySslEnum["Require"] = "require";
    RemoteServerEntitySslEnum["RequireImplicit"] = "require_implicit";
    RemoteServerEntitySslEnum["Never"] = "never";
})(RemoteServerEntitySslEnum || (RemoteServerEntitySslEnum = {}));
// RemoteServerEntity
/**
 * Create Remote Server
**/
var RemoteServerEntity = /** @class */ (function (_super) {
    __extends(RemoteServerEntity, _super);
    function RemoteServerEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_account_name" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "authAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_setup_link" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "authSetupLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_status" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "authStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication_method" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azure_blob_storage_account" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "azureBlobStorageAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azure_blob_storage_container" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "azureBlobStorageContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backblaze_b2_bucket" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "backblazeB2Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backblaze_b2_s3_endpoint" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "backblazeB2S3Endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable_dedicated_ips" }),
        __metadata("design:type", Boolean)
    ], RemoteServerEntity.prototype, "enableDedicatedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_cloud_storage_bucket" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "googleCloudStorageBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_cloud_storage_project_id" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "googleCloudStorageProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RemoteServerEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], RemoteServerEntity.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_drive_account_type" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "oneDriveAccountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], RemoteServerEntity.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rackspace_container" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "rackspaceContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rackspace_region" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "rackspaceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rackspace_username" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "rackspaceUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remote_home_path" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "remoteHomePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3_bucket" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3_compatible_bucket" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "s3CompatibleBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3_compatible_endpoint" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "s3CompatibleEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3_compatible_region" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "s3CompatibleRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3_region" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "s3Region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_certificate" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "serverCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_host_key" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "serverHostKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "ssl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wasabi_bucket" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "wasabiBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wasabi_region" }),
        __metadata("design:type", String)
    ], RemoteServerEntity.prototype, "wasabiRegion", void 0);
    return RemoteServerEntity;
}(SpeakeasyBase));
export { RemoteServerEntity };
