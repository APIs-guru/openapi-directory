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
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basePlanId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offerId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams.prototype, "productId", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest };
var AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse, _super);
    function AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse.prototype, "statusCode", void 0);
    return AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse };
