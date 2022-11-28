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
var AdsenseAccountsUrlchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListPathParams, _super);
    function AdsenseAccountsUrlchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListPathParams.prototype, "adClientId", void 0);
    return AdsenseAccountsUrlchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListPathParams };
var AdsenseAccountsUrlchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListQueryParams, _super);
    function AdsenseAccountsUrlchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsUrlchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListQueryParams };
var AdsenseAccountsUrlchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListSecurityOption1, _super);
    function AdsenseAccountsUrlchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsUrlchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsUrlchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsUrlchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListSecurityOption1 };
var AdsenseAccountsUrlchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListSecurityOption2, _super);
    function AdsenseAccountsUrlchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsUrlchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsUrlchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsUrlchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListSecurityOption2 };
var AdsenseAccountsUrlchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListSecurity, _super);
    function AdsenseAccountsUrlchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsUrlchannelsListSecurityOption1)
    ], AdsenseAccountsUrlchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsUrlchannelsListSecurityOption2)
    ], AdsenseAccountsUrlchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsUrlchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListSecurity };
var AdsenseAccountsUrlchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListRequest, _super);
    function AdsenseAccountsUrlchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsUrlchannelsListPathParams)
    ], AdsenseAccountsUrlchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsUrlchannelsListQueryParams)
    ], AdsenseAccountsUrlchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsUrlchannelsListSecurity)
    ], AdsenseAccountsUrlchannelsListRequest.prototype, "security", void 0);
    return AdsenseAccountsUrlchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListRequest };
var AdsenseAccountsUrlchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsUrlchannelsListResponse, _super);
    function AdsenseAccountsUrlchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsUrlchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsUrlchannelsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UrlChannels)
    ], AdsenseAccountsUrlchannelsListResponse.prototype, "urlChannels", void 0);
    return AdsenseAccountsUrlchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsUrlchannelsListResponse };
