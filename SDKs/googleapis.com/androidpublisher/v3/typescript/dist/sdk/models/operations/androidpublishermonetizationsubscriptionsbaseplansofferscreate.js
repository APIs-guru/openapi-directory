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
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basePlanId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offerId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionsVersion.version" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "regionsVersionVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionOfferInput)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionOffer)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse.prototype, "subscriptionOffer", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse };
