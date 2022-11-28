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
var AndroidpublisherEditsApklistingsListPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsListPathParams, _super);
    function AndroidpublisherEditsApklistingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsApklistingsListPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsApklistingsListPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsListPathParams };
var AndroidpublisherEditsApklistingsListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsListQueryParams, _super);
    function AndroidpublisherEditsApklistingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsApklistingsListQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsListQueryParams };
var AndroidpublisherEditsApklistingsListSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsListSecurity, _super);
    function AndroidpublisherEditsApklistingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsApklistingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsApklistingsListSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsApklistingsListSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsListSecurity };
var AndroidpublisherEditsApklistingsListRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsListRequest, _super);
    function AndroidpublisherEditsApklistingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsListPathParams)
    ], AndroidpublisherEditsApklistingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsListQueryParams)
    ], AndroidpublisherEditsApklistingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApklistingsListSecurity)
    ], AndroidpublisherEditsApklistingsListRequest.prototype, "security", void 0);
    return AndroidpublisherEditsApklistingsListRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsListRequest };
var AndroidpublisherEditsApklistingsListResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApklistingsListResponse, _super);
    function AndroidpublisherEditsApklistingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsApklistingsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApklistingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsApklistingsListResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsApklistingsListResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsApklistingsListResponse };
