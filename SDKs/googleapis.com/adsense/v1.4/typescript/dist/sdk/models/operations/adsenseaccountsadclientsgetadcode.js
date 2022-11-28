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
var AdsenseAccountsAdclientsGetAdCodePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodePathParams, _super);
    function AdsenseAccountsAdclientsGetAdCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodePathParams.prototype, "adClientId", void 0);
    return AdsenseAccountsAdclientsGetAdCodePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodePathParams };
var AdsenseAccountsAdclientsGetAdCodeQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeQueryParams, _super);
    function AdsenseAccountsAdclientsGetAdCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagPartner" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "tagPartner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAdclientsGetAdCodeQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeQueryParams };
var AdsenseAccountsAdclientsGetAdCodeSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeSecurityOption1, _super);
    function AdsenseAccountsAdclientsGetAdCodeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsGetAdCodeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsGetAdCodeSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeSecurityOption1 };
var AdsenseAccountsAdclientsGetAdCodeSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeSecurityOption2, _super);
    function AdsenseAccountsAdclientsGetAdCodeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsGetAdCodeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsGetAdCodeSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeSecurityOption2 };
var AdsenseAccountsAdclientsGetAdCodeSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeSecurity, _super);
    function AdsenseAccountsAdclientsGetAdCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsGetAdCodeSecurityOption1)
    ], AdsenseAccountsAdclientsGetAdCodeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsGetAdCodeSecurityOption2)
    ], AdsenseAccountsAdclientsGetAdCodeSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsGetAdCodeSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeSecurity };
var AdsenseAccountsAdclientsGetAdCodeRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeRequest, _super);
    function AdsenseAccountsAdclientsGetAdCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsGetAdCodePathParams)
    ], AdsenseAccountsAdclientsGetAdCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsGetAdCodeQueryParams)
    ], AdsenseAccountsAdclientsGetAdCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsGetAdCodeSecurity)
    ], AdsenseAccountsAdclientsGetAdCodeRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsGetAdCodeRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeRequest };
var AdsenseAccountsAdclientsGetAdCodeResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsGetAdCodeResponse, _super);
    function AdsenseAccountsAdclientsGetAdCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdCode)
    ], AdsenseAccountsAdclientsGetAdCodeResponse.prototype, "adCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsGetAdCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsGetAdCodeResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsGetAdCodeResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsGetAdCodeResponse };
