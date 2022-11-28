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
var AdsenseAccountsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetPathParams, _super);
    function AdsenseAccountsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetPathParams.prototype, "accountId", void 0);
    return AdsenseAccountsGetPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsGetPathParams };
var AdsenseAccountsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetQueryParams, _super);
    function AdsenseAccountsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tree" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsGetQueryParams.prototype, "tree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsGetQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsGetQueryParams };
var AdsenseAccountsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetSecurityOption1, _super);
    function AdsenseAccountsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsGetSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsGetSecurityOption1 };
var AdsenseAccountsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetSecurityOption2, _super);
    function AdsenseAccountsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsGetSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsGetSecurityOption2 };
var AdsenseAccountsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetSecurity, _super);
    function AdsenseAccountsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsGetSecurityOption1)
    ], AdsenseAccountsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsGetSecurityOption2)
    ], AdsenseAccountsGetSecurity.prototype, "option2", void 0);
    return AdsenseAccountsGetSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsGetSecurity };
var AdsenseAccountsGetRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetRequest, _super);
    function AdsenseAccountsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetPathParams)
    ], AdsenseAccountsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetQueryParams)
    ], AdsenseAccountsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetSecurity)
    ], AdsenseAccountsGetRequest.prototype, "security", void 0);
    return AdsenseAccountsGetRequest;
}(SpeakeasyBase));
export { AdsenseAccountsGetRequest };
var AdsenseAccountsGetResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetResponse, _super);
    function AdsenseAccountsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Account)
    ], AdsenseAccountsGetResponse.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsGetResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsGetResponse;
}(SpeakeasyBase));
export { AdsenseAccountsGetResponse };
