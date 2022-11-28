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
var AndroidpublisherInternalappsharingartifactsUploadapkPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadapkPathParams, _super);
    function AndroidpublisherInternalappsharingartifactsUploadapkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkPathParams.prototype, "packageName", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadapkPathParams;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadapkPathParams };
var AndroidpublisherInternalappsharingartifactsUploadapkQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadapkQueryParams, _super);
    function AndroidpublisherInternalappsharingartifactsUploadapkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadapkQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadapkQueryParams };
var AndroidpublisherInternalappsharingartifactsUploadapkSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadapkSecurity, _super);
    function AndroidpublisherInternalappsharingartifactsUploadapkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherInternalappsharingartifactsUploadapkSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherInternalappsharingartifactsUploadapkSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadapkSecurity;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadapkSecurity };
var AndroidpublisherInternalappsharingartifactsUploadapkRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadapkRequest, _super);
    function AndroidpublisherInternalappsharingartifactsUploadapkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadapkPathParams)
    ], AndroidpublisherInternalappsharingartifactsUploadapkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadapkQueryParams)
    ], AndroidpublisherInternalappsharingartifactsUploadapkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInternalappsharingartifactsUploadapkSecurity)
    ], AndroidpublisherInternalappsharingartifactsUploadapkRequest.prototype, "security", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadapkRequest;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadapkRequest };
var AndroidpublisherInternalappsharingartifactsUploadapkResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherInternalappsharingartifactsUploadapkResponse, _super);
    function AndroidpublisherInternalappsharingartifactsUploadapkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherInternalappsharingartifactsUploadapkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalAppSharingArtifact)
    ], AndroidpublisherInternalappsharingartifactsUploadapkResponse.prototype, "internalAppSharingArtifact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherInternalappsharingartifactsUploadapkResponse.prototype, "statusCode", void 0);
    return AndroidpublisherInternalappsharingartifactsUploadapkResponse;
}(SpeakeasyBase));
export { AndroidpublisherInternalappsharingartifactsUploadapkResponse };
