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
export var AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
(function (AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum) {
    AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum["Main"] = "main";
    AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum["Patch"] = "patch";
})(AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum || (AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = {}));
var AndroidpublisherEditsExpansionfilesUploadPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadPathParams, _super);
    function AndroidpublisherEditsExpansionfilesUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=expansionFileType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "expansionFileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsExpansionfilesUploadPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesUploadPathParams };
var AndroidpublisherEditsExpansionfilesUploadQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadQueryParams, _super);
    function AndroidpublisherEditsExpansionfilesUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsExpansionfilesUploadQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesUploadQueryParams };
var AndroidpublisherEditsExpansionfilesUploadSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadSecurity, _super);
    function AndroidpublisherEditsExpansionfilesUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsExpansionfilesUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsExpansionfilesUploadSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsExpansionfilesUploadSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesUploadSecurity };
var AndroidpublisherEditsExpansionfilesUploadRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadRequest, _super);
    function AndroidpublisherEditsExpansionfilesUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadPathParams)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadQueryParams)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadSecurity)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "security", void 0);
    return AndroidpublisherEditsExpansionfilesUploadRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesUploadRequest };
var AndroidpublisherEditsExpansionfilesUploadResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadResponse, _super);
    function AndroidpublisherEditsExpansionfilesUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsExpansionfilesUploadResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesUploadResponse };
