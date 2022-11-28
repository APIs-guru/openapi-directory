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
export var AndroidpublisherEditsImagesDeleteallImageTypeEnum;
(function (AndroidpublisherEditsImagesDeleteallImageTypeEnum) {
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["FeatureGraphic"] = "featureGraphic";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["Icon"] = "icon";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["PhoneScreenshots"] = "phoneScreenshots";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["PromoGraphic"] = "promoGraphic";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["SevenInchScreenshots"] = "sevenInchScreenshots";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["TenInchScreenshots"] = "tenInchScreenshots";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["TvBanner"] = "tvBanner";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["TvScreenshots"] = "tvScreenshots";
    AndroidpublisherEditsImagesDeleteallImageTypeEnum["WearScreenshots"] = "wearScreenshots";
})(AndroidpublisherEditsImagesDeleteallImageTypeEnum || (AndroidpublisherEditsImagesDeleteallImageTypeEnum = {}));
var AndroidpublisherEditsImagesDeleteallPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteallPathParams, _super);
    function AndroidpublisherEditsImagesDeleteallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallPathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsImagesDeleteallPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteallPathParams };
var AndroidpublisherEditsImagesDeleteallQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteallQueryParams, _super);
    function AndroidpublisherEditsImagesDeleteallQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsImagesDeleteallQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteallQueryParams };
var AndroidpublisherEditsImagesDeleteallSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteallSecurity, _super);
    function AndroidpublisherEditsImagesDeleteallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsImagesDeleteallSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsImagesDeleteallSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsImagesDeleteallSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteallSecurity };
var AndroidpublisherEditsImagesDeleteallRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteallRequest, _super);
    function AndroidpublisherEditsImagesDeleteallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeleteallPathParams)
    ], AndroidpublisherEditsImagesDeleteallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeleteallQueryParams)
    ], AndroidpublisherEditsImagesDeleteallRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeleteallSecurity)
    ], AndroidpublisherEditsImagesDeleteallRequest.prototype, "security", void 0);
    return AndroidpublisherEditsImagesDeleteallRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteallRequest };
var AndroidpublisherEditsImagesDeleteallResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteallResponse, _super);
    function AndroidpublisherEditsImagesDeleteallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsImagesDeleteallResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsImagesDeleteallResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsImagesDeleteallResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteallResponse };
