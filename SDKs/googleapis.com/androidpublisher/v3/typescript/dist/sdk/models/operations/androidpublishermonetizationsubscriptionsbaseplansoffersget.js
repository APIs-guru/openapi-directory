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
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basePlanId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offerId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionOffer)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse.prototype, "subscriptionOffer", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse };
