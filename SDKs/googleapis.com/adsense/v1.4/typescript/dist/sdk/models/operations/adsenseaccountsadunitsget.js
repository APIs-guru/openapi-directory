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
var AdsenseAccountsAdunitsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetPathParams, _super);
    function AdsenseAccountsAdunitsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetPathParams.prototype, "adUnitId", void 0);
    return AdsenseAccountsAdunitsGetPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetPathParams };
var AdsenseAccountsAdunitsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetQueryParams, _super);
    function AdsenseAccountsAdunitsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAdunitsGetQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetQueryParams };
var AdsenseAccountsAdunitsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetSecurityOption1, _super);
    function AdsenseAccountsAdunitsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsGetSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetSecurityOption1 };
var AdsenseAccountsAdunitsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetSecurityOption2, _super);
    function AdsenseAccountsAdunitsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsGetSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetSecurityOption2 };
var AdsenseAccountsAdunitsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetSecurity, _super);
    function AdsenseAccountsAdunitsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsGetSecurityOption1)
    ], AdsenseAccountsAdunitsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsGetSecurityOption2)
    ], AdsenseAccountsAdunitsGetSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdunitsGetSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetSecurity };
var AdsenseAccountsAdunitsGetRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetRequest, _super);
    function AdsenseAccountsAdunitsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetPathParams)
    ], AdsenseAccountsAdunitsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetQueryParams)
    ], AdsenseAccountsAdunitsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsGetSecurity)
    ], AdsenseAccountsAdunitsGetRequest.prototype, "security", void 0);
    return AdsenseAccountsAdunitsGetRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetRequest };
var AdsenseAccountsAdunitsGetResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsGetResponse, _super);
    function AdsenseAccountsAdunitsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsenseAccountsAdunitsGetResponse.prototype, "adUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsGetResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdunitsGetResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsGetResponse };
