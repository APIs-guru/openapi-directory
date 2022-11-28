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
var AdsenseAdunitsGetAdCodePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodePathParams, _super);
    function AdsenseAdunitsGetAdCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodePathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodePathParams.prototype, "adUnitId", void 0);
    return AdsenseAdunitsGetAdCodePathParams;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodePathParams };
var AdsenseAdunitsGetAdCodeQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeQueryParams, _super);
    function AdsenseAdunitsGetAdCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeQueryParams.prototype, "userIp", void 0);
    return AdsenseAdunitsGetAdCodeQueryParams;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeQueryParams };
var AdsenseAdunitsGetAdCodeSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeSecurityOption1, _super);
    function AdsenseAdunitsGetAdCodeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsGetAdCodeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsGetAdCodeSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAdunitsGetAdCodeSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeSecurityOption1 };
var AdsenseAdunitsGetAdCodeSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeSecurityOption2, _super);
    function AdsenseAdunitsGetAdCodeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsGetAdCodeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsGetAdCodeSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAdunitsGetAdCodeSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeSecurityOption2 };
var AdsenseAdunitsGetAdCodeSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeSecurity, _super);
    function AdsenseAdunitsGetAdCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsGetAdCodeSecurityOption1)
    ], AdsenseAdunitsGetAdCodeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsGetAdCodeSecurityOption2)
    ], AdsenseAdunitsGetAdCodeSecurity.prototype, "option2", void 0);
    return AdsenseAdunitsGetAdCodeSecurity;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeSecurity };
var AdsenseAdunitsGetAdCodeRequest = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeRequest, _super);
    function AdsenseAdunitsGetAdCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetAdCodePathParams)
    ], AdsenseAdunitsGetAdCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetAdCodeQueryParams)
    ], AdsenseAdunitsGetAdCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetAdCodeSecurity)
    ], AdsenseAdunitsGetAdCodeRequest.prototype, "security", void 0);
    return AdsenseAdunitsGetAdCodeRequest;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeRequest };
var AdsenseAdunitsGetAdCodeResponse = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetAdCodeResponse, _super);
    function AdsenseAdunitsGetAdCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdCode)
    ], AdsenseAdunitsGetAdCodeResponse.prototype, "adCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetAdCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAdunitsGetAdCodeResponse.prototype, "statusCode", void 0);
    return AdsenseAdunitsGetAdCodeResponse;
}(SpeakeasyBase));
export { AdsenseAdunitsGetAdCodeResponse };
