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
var AdsenseAccountsAdunitsGetAdCodePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodePathParams, _super);
    function AdsenseAccountsAdunitsGetAdCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodePathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodePathParams.prototype, "adUnitId", void 0);
    return AdsenseAccountsAdunitsGetAdCodePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodePathParams };
var AdsenseAccountsAdunitsGetAdCodeQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeQueryParams, _super);
    function AdsenseAccountsAdunitsGetAdCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAdunitsGetAdCodeQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeQueryParams };
var AdsenseAccountsAdunitsGetAdCodeSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeSecurityOption1, _super);
    function AdsenseAccountsAdunitsGetAdCodeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsGetAdCodeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsGetAdCodeSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsGetAdCodeSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeSecurityOption1 };
var AdsenseAccountsAdunitsGetAdCodeSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeSecurityOption2, _super);
    function AdsenseAccountsAdunitsGetAdCodeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsGetAdCodeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsGetAdCodeSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsGetAdCodeSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeSecurityOption2 };
var AdsenseAccountsAdunitsGetAdCodeSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeSecurity, _super);
    function AdsenseAccountsAdunitsGetAdCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsGetAdCodeSecurityOption1)
    ], AdsenseAccountsAdunitsGetAdCodeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsGetAdCodeSecurityOption2)
    ], AdsenseAccountsAdunitsGetAdCodeSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdunitsGetAdCodeSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeSecurity };
var AdsenseAccountsAdunitsGetAdCodeRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeRequest, _super);
    function AdsenseAccountsAdunitsGetAdCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetAdCodePathParams)
    ], AdsenseAccountsAdunitsGetAdCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetAdCodeQueryParams)
    ], AdsenseAccountsAdunitsGetAdCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetAdCodeSecurity)
    ], AdsenseAccountsAdunitsGetAdCodeRequest.prototype, "security", void 0);
    return AdsenseAccountsAdunitsGetAdCodeRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeRequest };
var AdsenseAccountsAdunitsGetAdCodeResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetAdCodeResponse, _super);
    function AdsenseAccountsAdunitsGetAdCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdCode)
    ], AdsenseAccountsAdunitsGetAdCodeResponse.prototype, "adCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetAdCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsGetAdCodeResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdunitsGetAdCodeResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetAdCodeResponse };
