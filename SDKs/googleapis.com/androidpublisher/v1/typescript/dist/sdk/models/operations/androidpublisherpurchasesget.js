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
var AndroidpublisherPurchasesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesGetPathParams, _super);
    function AndroidpublisherPurchasesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetPathParams.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetPathParams.prototype, "token", void 0);
    return AndroidpublisherPurchasesGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesGetPathParams };
var AndroidpublisherPurchasesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesGetQueryParams, _super);
    function AndroidpublisherPurchasesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherPurchasesGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesGetQueryParams };
var AndroidpublisherPurchasesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesGetSecurity, _super);
    function AndroidpublisherPurchasesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesGetSecurity };
var AndroidpublisherPurchasesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesGetRequest, _super);
    function AndroidpublisherPurchasesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesGetPathParams)
    ], AndroidpublisherPurchasesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesGetQueryParams)
    ], AndroidpublisherPurchasesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesGetSecurity)
    ], AndroidpublisherPurchasesGetRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesGetRequest };
var AndroidpublisherPurchasesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesGetResponse, _super);
    function AndroidpublisherPurchasesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherPurchasesGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherPurchasesGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesGetResponse };
