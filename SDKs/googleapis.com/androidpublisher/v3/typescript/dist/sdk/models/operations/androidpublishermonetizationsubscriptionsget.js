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
var AndroidpublisherMonetizationSubscriptionsGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsGetPathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetPathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsGetPathParams };
var AndroidpublisherMonetizationSubscriptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsGetQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsGetQueryParams };
var AndroidpublisherMonetizationSubscriptionsGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsGetSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsGetSecurity };
var AndroidpublisherMonetizationSubscriptionsGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsGetRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsGetPathParams)
    ], AndroidpublisherMonetizationSubscriptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsGetQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsGetSecurity)
    ], AndroidpublisherMonetizationSubscriptionsGetRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsGetRequest };
var AndroidpublisherMonetizationSubscriptionsGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsGetResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], AndroidpublisherMonetizationSubscriptionsGetResponse.prototype, "subscription", void 0);
    return AndroidpublisherMonetizationSubscriptionsGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsGetResponse };
