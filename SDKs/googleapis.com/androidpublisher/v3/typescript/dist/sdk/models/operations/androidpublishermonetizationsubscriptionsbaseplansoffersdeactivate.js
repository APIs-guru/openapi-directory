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
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basePlanId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offerId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionOffer)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse.prototype, "subscriptionOffer", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse };
