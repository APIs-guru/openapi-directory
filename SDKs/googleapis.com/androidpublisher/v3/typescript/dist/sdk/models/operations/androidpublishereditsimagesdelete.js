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
export var AndroidpublisherEditsImagesDeleteImageTypeEnum;
(function (AndroidpublisherEditsImagesDeleteImageTypeEnum) {
    AndroidpublisherEditsImagesDeleteImageTypeEnum["AppImageTypeUnspecified"] = "appImageTypeUnspecified";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["PhoneScreenshots"] = "phoneScreenshots";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["SevenInchScreenshots"] = "sevenInchScreenshots";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["TenInchScreenshots"] = "tenInchScreenshots";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["TvScreenshots"] = "tvScreenshots";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["WearScreenshots"] = "wearScreenshots";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["Icon"] = "icon";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["FeatureGraphic"] = "featureGraphic";
    AndroidpublisherEditsImagesDeleteImageTypeEnum["TvBanner"] = "tvBanner";
})(AndroidpublisherEditsImagesDeleteImageTypeEnum || (AndroidpublisherEditsImagesDeleteImageTypeEnum = {}));
var AndroidpublisherEditsImagesDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeletePathParams, _super);
    function AndroidpublisherEditsImagesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeletePathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeletePathParams.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeletePathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeletePathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeletePathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsImagesDeletePathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeletePathParams };
var AndroidpublisherEditsImagesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteQueryParams, _super);
    function AndroidpublisherEditsImagesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsImagesDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteQueryParams };
var AndroidpublisherEditsImagesDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteSecurity, _super);
    function AndroidpublisherEditsImagesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsImagesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsImagesDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsImagesDeleteSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteSecurity };
var AndroidpublisherEditsImagesDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteRequest, _super);
    function AndroidpublisherEditsImagesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeletePathParams)
    ], AndroidpublisherEditsImagesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeleteQueryParams)
    ], AndroidpublisherEditsImagesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsImagesDeleteSecurity)
    ], AndroidpublisherEditsImagesDeleteRequest.prototype, "security", void 0);
    return AndroidpublisherEditsImagesDeleteRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteRequest };
var AndroidpublisherEditsImagesDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsImagesDeleteResponse, _super);
    function AndroidpublisherEditsImagesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsImagesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsImagesDeleteResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsImagesDeleteResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsImagesDeleteResponse };
