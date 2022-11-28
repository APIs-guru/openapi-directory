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
var AndroidpublisherPurchasesSubscriptionsRevokePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRevokePathParams, _super);
    function AndroidpublisherPurchasesSubscriptionsRevokePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokePathParams.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokePathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesSubscriptionsRevokePathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRevokePathParams };
var AndroidpublisherPurchasesSubscriptionsRevokeQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRevokeQueryParams, _super);
    function AndroidpublisherPurchasesSubscriptionsRevokeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherPurchasesSubscriptionsRevokeQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRevokeQueryParams };
var AndroidpublisherPurchasesSubscriptionsRevokeSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRevokeSecurity, _super);
    function AndroidpublisherPurchasesSubscriptionsRevokeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesSubscriptionsRevokeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesSubscriptionsRevokeSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesSubscriptionsRevokeSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRevokeSecurity };
var AndroidpublisherPurchasesSubscriptionsRevokeRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRevokeRequest, _super);
    function AndroidpublisherPurchasesSubscriptionsRevokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRevokePathParams)
    ], AndroidpublisherPurchasesSubscriptionsRevokeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRevokeQueryParams)
    ], AndroidpublisherPurchasesSubscriptionsRevokeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesSubscriptionsRevokeSecurity)
    ], AndroidpublisherPurchasesSubscriptionsRevokeRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesSubscriptionsRevokeRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRevokeRequest };
var AndroidpublisherPurchasesSubscriptionsRevokeResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesSubscriptionsRevokeResponse, _super);
    function AndroidpublisherPurchasesSubscriptionsRevokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesSubscriptionsRevokeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesSubscriptionsRevokeResponse.prototype, "statusCode", void 0);
    return AndroidpublisherPurchasesSubscriptionsRevokeResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesSubscriptionsRevokeResponse };
