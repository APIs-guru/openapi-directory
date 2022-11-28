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
var AndroidpublisherPurchasesSubscriptionsRefundPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRefundPathParams, _super);
    function AndroidpublisherPurchasesSubscriptionsRefundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundPathParams.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundPathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesSubscriptionsRefundPathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRefundPathParams };
var AndroidpublisherPurchasesSubscriptionsRefundQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRefundQueryParams, _super);
    function AndroidpublisherPurchasesSubscriptionsRefundQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherPurchasesSubscriptionsRefundQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRefundQueryParams };
var AndroidpublisherPurchasesSubscriptionsRefundSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRefundSecurity, _super);
    function AndroidpublisherPurchasesSubscriptionsRefundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesSubscriptionsRefundSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesSubscriptionsRefundSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesSubscriptionsRefundSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRefundSecurity };
var AndroidpublisherPurchasesSubscriptionsRefundRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRefundRequest, _super);
    function AndroidpublisherPurchasesSubscriptionsRefundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRefundPathParams)
    ], AndroidpublisherPurchasesSubscriptionsRefundRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRefundQueryParams)
    ], AndroidpublisherPurchasesSubscriptionsRefundRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRefundSecurity)
    ], AndroidpublisherPurchasesSubscriptionsRefundRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesSubscriptionsRefundRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRefundRequest };
var AndroidpublisherPurchasesSubscriptionsRefundResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRefundResponse, _super);
    function AndroidpublisherPurchasesSubscriptionsRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRefundResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesSubscriptionsRefundResponse.prototype, "statusCode", void 0);
    return AndroidpublisherPurchasesSubscriptionsRefundResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRefundResponse };
