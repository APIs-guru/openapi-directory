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
var AndroidpublisherSystemapksVariantsDownloadPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsDownloadPathParams, _super);
    function AndroidpublisherSystemapksVariantsDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variantId" }),
        __metadata("design:type", Number)
    ], AndroidpublisherSystemapksVariantsDownloadPathParams.prototype, "variantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionCode" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadPathParams.prototype, "versionCode", void 0);
    return AndroidpublisherSystemapksVariantsDownloadPathParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsDownloadPathParams };
var AndroidpublisherSystemapksVariantsDownloadQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsDownloadQueryParams, _super);
    function AndroidpublisherSystemapksVariantsDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherSystemapksVariantsDownloadQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsDownloadQueryParams };
var AndroidpublisherSystemapksVariantsDownloadSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsDownloadSecurity, _super);
    function AndroidpublisherSystemapksVariantsDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherSystemapksVariantsDownloadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherSystemapksVariantsDownloadSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherSystemapksVariantsDownloadSecurity;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsDownloadSecurity };
var AndroidpublisherSystemapksVariantsDownloadRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsDownloadRequest, _super);
    function AndroidpublisherSystemapksVariantsDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsDownloadPathParams)
    ], AndroidpublisherSystemapksVariantsDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsDownloadQueryParams)
    ], AndroidpublisherSystemapksVariantsDownloadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsDownloadSecurity)
    ], AndroidpublisherSystemapksVariantsDownloadRequest.prototype, "security", void 0);
    return AndroidpublisherSystemapksVariantsDownloadRequest;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsDownloadRequest };
var AndroidpublisherSystemapksVariantsDownloadResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsDownloadResponse, _super);
    function AndroidpublisherSystemapksVariantsDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherSystemapksVariantsDownloadResponse.prototype, "statusCode", void 0);
    return AndroidpublisherSystemapksVariantsDownloadResponse;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsDownloadResponse };
