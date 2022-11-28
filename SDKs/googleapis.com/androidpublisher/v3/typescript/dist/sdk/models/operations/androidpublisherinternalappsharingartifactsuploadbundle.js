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
var AndroidpublisherInternalappsharingartifactsUploadbundlePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadbundlePathParams, _super);
    function AndroidpublisherInternalappsharingartifactsUploadbundlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundlePathParams.prototype, "packageName", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadbundlePathParams;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadbundlePathParams };
var AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams, _super);
    function AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams };
var AndroidpublisherInternalappsharingartifactsUploadbundleSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadbundleSecurity, _super);
    function AndroidpublisherInternalappsharingartifactsUploadbundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadbundleSecurity;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadbundleSecurity };
var AndroidpublisherInternalappsharingartifactsUploadbundleRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadbundleRequest, _super);
    function AndroidpublisherInternalappsharingartifactsUploadbundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadbundlePathParams)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadbundleSecurity)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleRequest.prototype, "security", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadbundleRequest;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadbundleRequest };
var AndroidpublisherInternalappsharingartifactsUploadbundleResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadbundleResponse, _super);
    function AndroidpublisherInternalappsharingartifactsUploadbundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalAppSharingArtifact)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleResponse.prototype, "internalAppSharingArtifact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherInternalappsharingartifactsUploadbundleResponse.prototype, "statusCode", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadbundleResponse;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadbundleResponse };
