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
var AdsenseAccountsAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListPathParams, _super);
    function AdsenseAccountsAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListPathParams.prototype, "adClientId", void 0);
    return AdsenseAccountsAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListPathParams };
var AdsenseAccountsAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListQueryParams, _super);
    function AdsenseAccountsAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListQueryParams };
var AdsenseAccountsAdunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListSecurityOption1, _super);
    function AdsenseAccountsAdunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListSecurityOption1 };
var AdsenseAccountsAdunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListSecurityOption2, _super);
    function AdsenseAccountsAdunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListSecurityOption2 };
var AdsenseAccountsAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListSecurity, _super);
    function AdsenseAccountsAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsListSecurityOption1)
    ], AdsenseAccountsAdunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsListSecurityOption2)
    ], AdsenseAccountsAdunitsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListSecurity };
var AdsenseAccountsAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListRequest, _super);
    function AdsenseAccountsAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsListPathParams)
    ], AdsenseAccountsAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsListQueryParams)
    ], AdsenseAccountsAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsListSecurity)
    ], AdsenseAccountsAdunitsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdunitsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListRequest };
var AdsenseAccountsAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsListResponse, _super);
    function AdsenseAccountsAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnits)
    ], AdsenseAccountsAdunitsListResponse.prototype, "adUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdunitsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsListResponse };
