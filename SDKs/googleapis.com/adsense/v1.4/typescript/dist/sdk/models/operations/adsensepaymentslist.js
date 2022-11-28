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
var AdsensePaymentsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListQueryParams, _super);
    function AdsensePaymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensePaymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensePaymentsListQueryParams.prototype, "userIp", void 0);
    return AdsensePaymentsListQueryParams;
}(SpeakeasyBase));
export { AdsensePaymentsListQueryParams };
var AdsensePaymentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListSecurityOption1, _super);
    function AdsensePaymentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensePaymentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensePaymentsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsensePaymentsListSecurityOption1;
}(SpeakeasyBase));
export { AdsensePaymentsListSecurityOption1 };
var AdsensePaymentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListSecurityOption2, _super);
    function AdsensePaymentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensePaymentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensePaymentsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsensePaymentsListSecurityOption2;
}(SpeakeasyBase));
export { AdsensePaymentsListSecurityOption2 };
var AdsensePaymentsListSecurity = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListSecurity, _super);
    function AdsensePaymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsensePaymentsListSecurityOption1)
    ], AdsensePaymentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsensePaymentsListSecurityOption2)
    ], AdsensePaymentsListSecurity.prototype, "option2", void 0);
    return AdsensePaymentsListSecurity;
}(SpeakeasyBase));
export { AdsensePaymentsListSecurity };
var AdsensePaymentsListRequest = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListRequest, _super);
    function AdsensePaymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensePaymentsListQueryParams)
    ], AdsensePaymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensePaymentsListSecurity)
    ], AdsensePaymentsListRequest.prototype, "security", void 0);
    return AdsensePaymentsListRequest;
}(SpeakeasyBase));
export { AdsensePaymentsListRequest };
var AdsensePaymentsListResponse = /** @class */ (function (_super) {
    __extends(AdsensePaymentsListResponse, _super);
    function AdsensePaymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsensePaymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Payments)
    ], AdsensePaymentsListResponse.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsensePaymentsListResponse.prototype, "statusCode", void 0);
    return AdsensePaymentsListResponse;
}(SpeakeasyBase));
export { AdsensePaymentsListResponse };
