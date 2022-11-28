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
export var AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
(function (AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum) {
    AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum["NativeCode"] = "nativeCode";
    AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum["Proguard"] = "proguard";
})(AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum || (AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = {}));
var AndroidpublisherEditsDeobfuscationfilesUploadPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsDeobfuscationfilesUploadPathParams, _super);
    function AndroidpublisherEditsDeobfuscationfilesUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsDeobfuscationfilesUploadPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deobfuscationFileType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadPathParams.prototype, "deobfuscationFileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsDeobfuscationfilesUploadPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsDeobfuscationfilesUploadPathParams };
var AndroidpublisherEditsDeobfuscationfilesUploadQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsDeobfuscationfilesUploadQueryParams, _super);
    function AndroidpublisherEditsDeobfuscationfilesUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsDeobfuscationfilesUploadQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsDeobfuscationfilesUploadQueryParams };
var AndroidpublisherEditsDeobfuscationfilesUploadSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsDeobfuscationfilesUploadSecurity, _super);
    function AndroidpublisherEditsDeobfuscationfilesUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsDeobfuscationfilesUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsDeobfuscationfilesUploadSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsDeobfuscationfilesUploadSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsDeobfuscationfilesUploadSecurity };
var AndroidpublisherEditsDeobfuscationfilesUploadRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsDeobfuscationfilesUploadRequest, _super);
    function AndroidpublisherEditsDeobfuscationfilesUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsDeobfuscationfilesUploadPathParams)
    ], AndroidpublisherEditsDeobfuscationfilesUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsDeobfuscationfilesUploadQueryParams)
    ], AndroidpublisherEditsDeobfuscationfilesUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsDeobfuscationfilesUploadSecurity)
    ], AndroidpublisherEditsDeobfuscationfilesUploadRequest.prototype, "security", void 0);
    return AndroidpublisherEditsDeobfuscationfilesUploadRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsDeobfuscationfilesUploadRequest };
var AndroidpublisherEditsDeobfuscationfilesUploadResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsDeobfuscationfilesUploadResponse, _super);
    function AndroidpublisherEditsDeobfuscationfilesUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsDeobfuscationfilesUploadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsDeobfuscationfilesUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsDeobfuscationfilesUploadResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsDeobfuscationfilesUploadResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsDeobfuscationfilesUploadResponse };
