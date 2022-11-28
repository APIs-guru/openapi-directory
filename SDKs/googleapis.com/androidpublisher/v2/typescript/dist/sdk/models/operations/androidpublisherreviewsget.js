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
var AndroidpublisherReviewsGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherReviewsGetPathParams, _super);
    function AndroidpublisherReviewsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetPathParams.prototype, "reviewId", void 0);
    return AndroidpublisherReviewsGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherReviewsGetPathParams };
var AndroidpublisherReviewsGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherReviewsGetQueryParams, _super);
    function AndroidpublisherReviewsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=translationLanguage" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "translationLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherReviewsGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherReviewsGetQueryParams };
var AndroidpublisherReviewsGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherReviewsGetSecurity, _super);
    function AndroidpublisherReviewsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherReviewsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherReviewsGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherReviewsGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherReviewsGetSecurity };
var AndroidpublisherReviewsGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherReviewsGetRequest, _super);
    function AndroidpublisherReviewsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherReviewsGetPathParams)
    ], AndroidpublisherReviewsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherReviewsGetQueryParams)
    ], AndroidpublisherReviewsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherReviewsGetSecurity)
    ], AndroidpublisherReviewsGetRequest.prototype, "security", void 0);
    return AndroidpublisherReviewsGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherReviewsGetRequest };
var AndroidpublisherReviewsGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherReviewsGetResponse, _super);
    function AndroidpublisherReviewsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherReviewsGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherReviewsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherReviewsGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherReviewsGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherReviewsGetResponse };
