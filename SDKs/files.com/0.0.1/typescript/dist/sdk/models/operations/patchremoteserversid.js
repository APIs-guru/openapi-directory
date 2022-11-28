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
import * as shared from "../shared";
var PatchRemoteServersIdPathParams = /** @class */ (function (_super) {
    __extends(PatchRemoteServersIdPathParams, _super);
    function PatchRemoteServersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchRemoteServersIdPathParams.prototype, "id", void 0);
    return PatchRemoteServersIdPathParams;
}(SpeakeasyBase));
export { PatchRemoteServersIdPathParams };
export var PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;
(function (PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum) {
    PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum["Personal"] = "personal";
    PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum["BusinessOther"] = "business_other";
})(PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum || (PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum = {}));
export var PatchRemoteServersIdRequestBodyServerCertificateEnum;
(function (PatchRemoteServersIdRequestBodyServerCertificateEnum) {
    PatchRemoteServersIdRequestBodyServerCertificateEnum["RequireMatch"] = "require_match";
    PatchRemoteServersIdRequestBodyServerCertificateEnum["AllowAny"] = "allow_any";
})(PatchRemoteServersIdRequestBodyServerCertificateEnum || (PatchRemoteServersIdRequestBodyServerCertificateEnum = {}));
export var PatchRemoteServersIdRequestBodyServerTypeEnum;
(function (PatchRemoteServersIdRequestBodyServerTypeEnum) {
    PatchRemoteServersIdRequestBodyServerTypeEnum["Ftp"] = "ftp";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Sftp"] = "sftp";
    PatchRemoteServersIdRequestBodyServerTypeEnum["S3"] = "s3";
    PatchRemoteServersIdRequestBodyServerTypeEnum["GoogleCloudStorage"] = "google_cloud_storage";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Webdav"] = "webdav";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Wasabi"] = "wasabi";
    PatchRemoteServersIdRequestBodyServerTypeEnum["BackblazeB2"] = "backblaze_b2";
    PatchRemoteServersIdRequestBodyServerTypeEnum["OneDrive"] = "one_drive";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Rackspace"] = "rackspace";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Box"] = "box";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Dropbox"] = "dropbox";
    PatchRemoteServersIdRequestBodyServerTypeEnum["GoogleDrive"] = "google_drive";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Azure"] = "azure";
    PatchRemoteServersIdRequestBodyServerTypeEnum["Sharepoint"] = "sharepoint";
    PatchRemoteServersIdRequestBodyServerTypeEnum["S3Compatible"] = "s3_compatible";
})(PatchRemoteServersIdRequestBodyServerTypeEnum || (PatchRemoteServersIdRequestBodyServerTypeEnum = {}));
export var PatchRemoteServersIdRequestBodySslEnum;
(function (PatchRemoteServersIdRequestBodySslEnum) {
    PatchRemoteServersIdRequestBodySslEnum["IfAvailable"] = "if_available";
    PatchRemoteServersIdRequestBodySslEnum["Require"] = "require";
    PatchRemoteServersIdRequestBodySslEnum["RequireImplicit"] = "require_implicit";
    PatchRemoteServersIdRequestBodySslEnum["Never"] = "never";
})(PatchRemoteServersIdRequestBodySslEnum || (PatchRemoteServersIdRequestBodySslEnum = {}));
var PatchRemoteServersIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchRemoteServersIdRequestBody, _super);
    function PatchRemoteServersIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=aws_access_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "awsAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=aws_secret_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "awsSecretKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_access_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "azureBlobStorageAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_account" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "azureBlobStorageAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_container" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "azureBlobStorageContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_application_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "backblazeB2ApplicationKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_bucket" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "backblazeB2Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_key_id" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "backblazeB2KeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_s3_endpoint" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "backblazeB2S3Endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=enable_dedicated_ips" }),
        __metadata("design:type", Boolean)
    ], PatchRemoteServersIdRequestBody.prototype, "enableDedicatedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_bucket" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "googleCloudStorageBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_credentials_json" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "googleCloudStorageCredentialsJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_project_id" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "googleCloudStorageProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=hostname" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=max_connections" }),
        __metadata("design:type", Number)
    ], PatchRemoteServersIdRequestBody.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=one_drive_account_type" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "oneDriveAccountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=port" }),
        __metadata("design:type", Number)
    ], PatchRemoteServersIdRequestBody.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=private_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=rackspace_api_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "rackspaceApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=rackspace_container" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "rackspaceContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=rackspace_region" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "rackspaceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=rackspace_username" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "rackspaceUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=reset_authentication" }),
        __metadata("design:type", Boolean)
    ], PatchRemoteServersIdRequestBody.prototype, "resetAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_bucket" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_access_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3CompatibleAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_bucket" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3CompatibleBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_endpoint" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3CompatibleEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_region" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3CompatibleRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_secret_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3CompatibleSecretKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=s3_region" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "s3Region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=server_certificate" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "serverCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=server_host_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "serverHostKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=server_type" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "ssl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_certificate" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "sslCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=wasabi_access_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "wasabiAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=wasabi_bucket" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "wasabiBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=wasabi_region" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "wasabiRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=wasabi_secret_key" }),
        __metadata("design:type", String)
    ], PatchRemoteServersIdRequestBody.prototype, "wasabiSecretKey", void 0);
    return PatchRemoteServersIdRequestBody;
}(SpeakeasyBase));
export { PatchRemoteServersIdRequestBody };
var PatchRemoteServersIdRequest = /** @class */ (function (_super) {
    __extends(PatchRemoteServersIdRequest, _super);
    function PatchRemoteServersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchRemoteServersIdPathParams)
    ], PatchRemoteServersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchRemoteServersIdRequestBody)
    ], PatchRemoteServersIdRequest.prototype, "request", void 0);
    return PatchRemoteServersIdRequest;
}(SpeakeasyBase));
export { PatchRemoteServersIdRequest };
var PatchRemoteServersIdResponse = /** @class */ (function (_super) {
    __extends(PatchRemoteServersIdResponse, _super);
    function PatchRemoteServersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchRemoteServersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemoteServerEntity)
    ], PatchRemoteServersIdResponse.prototype, "remoteServerEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchRemoteServersIdResponse.prototype, "statusCode", void 0);
    return PatchRemoteServersIdResponse;
}(SpeakeasyBase));
export { PatchRemoteServersIdResponse };
