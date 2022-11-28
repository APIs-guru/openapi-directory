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
var AndroidpublisherPurchasesSubscriptionsv2GetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsv2GetPathParams, _super);
    function AndroidpublisherPurchasesSubscriptionsv2GetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetPathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesSubscriptionsv2GetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsv2GetPathParams };
var AndroidpublisherPurchasesSubscriptionsv2GetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsv2GetQueryParams, _super);
    function AndroidpublisherPurchasesSubscriptionsv2GetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherPurchasesSubscriptionsv2GetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsv2GetQueryParams };
var AndroidpublisherPurchasesSubscriptionsv2GetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsv2GetSecurity, _super);
    function AndroidpublisherPurchasesSubscriptionsv2GetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesSubscriptionsv2GetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesSubscriptionsv2GetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesSubscriptionsv2GetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsv2GetSecurity };
var AndroidpublisherPurchasesSubscriptionsv2GetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsv2GetRequest, _super);
    function AndroidpublisherPurchasesSubscriptionsv2GetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsv2GetPathParams)
    ], AndroidpublisherPurchasesSubscriptionsv2GetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsv2GetQueryParams)
    ], AndroidpublisherPurchasesSubscriptionsv2GetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsv2GetSecurity)
    ], AndroidpublisherPurchasesSubscriptionsv2GetRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesSubscriptionsv2GetRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsv2GetRequest };
var AndroidpublisherPurchasesSubscriptionsv2GetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsv2GetResponse, _super);
    function AndroidpublisherPurchasesSubscriptionsv2GetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsv2GetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesSubscriptionsv2GetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionPurchaseV2)
    ], AndroidpublisherPurchasesSubscriptionsv2GetResponse.prototype, "subscriptionPurchaseV2", void 0);
    return AndroidpublisherPurchasesSubscriptionsv2GetResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsv2GetResponse };
