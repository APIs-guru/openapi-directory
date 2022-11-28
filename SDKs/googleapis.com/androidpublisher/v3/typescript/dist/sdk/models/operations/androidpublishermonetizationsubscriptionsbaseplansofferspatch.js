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
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basePlanId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offerId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionsVersion.version" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "regionsVersionVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionOfferInput)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionOffer)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse.prototype, "subscriptionOffer", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse };
