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
var AndroidpublisherPurchasesSubscriptionsDeferPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsDeferPathParams, _super);
    function AndroidpublisherPurchasesSubscriptionsDeferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferPathParams.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferPathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesSubscriptionsDeferPathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsDeferPathParams };
var AndroidpublisherPurchasesSubscriptionsDeferQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsDeferQueryParams, _super);
    function AndroidpublisherPurchasesSubscriptionsDeferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherPurchasesSubscriptionsDeferQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsDeferQueryParams };
var AndroidpublisherPurchasesSubscriptionsDeferSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsDeferSecurity, _super);
    function AndroidpublisherPurchasesSubscriptionsDeferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesSubscriptionsDeferSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesSubscriptionsDeferSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesSubscriptionsDeferSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsDeferSecurity };
var AndroidpublisherPurchasesSubscriptionsDeferRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsDeferRequest, _super);
    function AndroidpublisherPurchasesSubscriptionsDeferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsDeferPathParams)
    ], AndroidpublisherPurchasesSubscriptionsDeferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsDeferQueryParams)
    ], AndroidpublisherPurchasesSubscriptionsDeferRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionPurchasesDeferRequest)
    ], AndroidpublisherPurchasesSubscriptionsDeferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsDeferSecurity)
    ], AndroidpublisherPurchasesSubscriptionsDeferRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesSubscriptionsDeferRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsDeferRequest };
var AndroidpublisherPurchasesSubscriptionsDeferResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsDeferResponse, _super);
    function AndroidpublisherPurchasesSubscriptionsDeferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsDeferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesSubscriptionsDeferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionPurchasesDeferResponse)
    ], AndroidpublisherPurchasesSubscriptionsDeferResponse.prototype, "subscriptionPurchasesDeferResponse", void 0);
    return AndroidpublisherPurchasesSubscriptionsDeferResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsDeferResponse };
