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
var AndroidpublisherEditsApklistingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsUpdatePathParams, _super);
    function AndroidpublisherEditsApklistingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsApklistingsUpdatePathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdatePathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdatePathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdatePathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsApklistingsUpdatePathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsUpdatePathParams };
var AndroidpublisherEditsApklistingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsUpdateQueryParams, _super);
    function AndroidpublisherEditsApklistingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsApklistingsUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsUpdateQueryParams };
var AndroidpublisherEditsApklistingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsUpdateSecurity, _super);
    function AndroidpublisherEditsApklistingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsApklistingsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsApklistingsUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsApklistingsUpdateSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsUpdateSecurity };
var AndroidpublisherEditsApklistingsUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsUpdateRequest, _super);
    function AndroidpublisherEditsApklistingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsUpdatePathParams)
    ], AndroidpublisherEditsApklistingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsUpdateQueryParams)
    ], AndroidpublisherEditsApklistingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApkListing)
    ], AndroidpublisherEditsApklistingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsUpdateSecurity)
    ], AndroidpublisherEditsApklistingsUpdateRequest.prototype, "security", void 0);
    return AndroidpublisherEditsApklistingsUpdateRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsUpdateRequest };
var AndroidpublisherEditsApklistingsUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsUpdateResponse, _super);
    function AndroidpublisherEditsApklistingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsApklistingsUpdateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsApklistingsUpdateResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsApklistingsUpdateResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsUpdateResponse };
