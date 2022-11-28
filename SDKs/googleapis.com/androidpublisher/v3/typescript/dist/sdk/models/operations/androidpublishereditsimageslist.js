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
export var AndroidpublisherEditsImagesListImageTypeEnum;
(function (AndroidpublisherEditsImagesListImageTypeEnum) {
    AndroidpublisherEditsImagesListImageTypeEnum["AppImageTypeUnspecified"] = "appImageTypeUnspecified";
    AndroidpublisherEditsImagesListImageTypeEnum["PhoneScreenshots"] = "phoneScreenshots";
    AndroidpublisherEditsImagesListImageTypeEnum["SevenInchScreenshots"] = "sevenInchScreenshots";
    AndroidpublisherEditsImagesListImageTypeEnum["TenInchScreenshots"] = "tenInchScreenshots";
    AndroidpublisherEditsImagesListImageTypeEnum["TvScreenshots"] = "tvScreenshots";
    AndroidpublisherEditsImagesListImageTypeEnum["WearScreenshots"] = "wearScreenshots";
    AndroidpublisherEditsImagesListImageTypeEnum["Icon"] = "icon";
    AndroidpublisherEditsImagesListImageTypeEnum["FeatureGraphic"] = "featureGraphic";
    AndroidpublisherEditsImagesListImageTypeEnum["TvBanner"] = "tvBanner";
})(AndroidpublisherEditsImagesListImageTypeEnum || (AndroidpublisherEditsImagesListImageTypeEnum = {}));
var AndroidpublisherEditsImagesListPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesListPathParams, _super);
    function AndroidpublisherEditsImagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListPathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsImagesListPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesListPathParams };
var AndroidpublisherEditsImagesListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesListQueryParams, _super);
    function AndroidpublisherEditsImagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsImagesListQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesListQueryParams };
var AndroidpublisherEditsImagesListSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesListSecurity, _super);
    function AndroidpublisherEditsImagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsImagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsImagesListSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsImagesListSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesListSecurity };
var AndroidpublisherEditsImagesListRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesListRequest, _super);
    function AndroidpublisherEditsImagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesListPathParams)
    ], AndroidpublisherEditsImagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesListQueryParams)
    ], AndroidpublisherEditsImagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesListSecurity)
    ], AndroidpublisherEditsImagesListRequest.prototype, "security", void 0);
    return AndroidpublisherEditsImagesListRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesListRequest };
var AndroidpublisherEditsImagesListResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesListResponse, _super);
    function AndroidpublisherEditsImagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagesListResponse)
    ], AndroidpublisherEditsImagesListResponse.prototype, "imagesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsImagesListResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsImagesListResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesListResponse };
