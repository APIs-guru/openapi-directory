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
var AdsenseAccountsAdunitsCustomchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListPathParams, _super);
    function AdsenseAccountsAdunitsCustomchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListPathParams.prototype, "adUnitId", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListPathParams };
var AdsenseAccountsAdunitsCustomchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListQueryParams, _super);
    function AdsenseAccountsAdunitsCustomchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListQueryParams };
var AdsenseAccountsAdunitsCustomchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListSecurityOption1, _super);
    function AdsenseAccountsAdunitsCustomchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListSecurityOption1 };
var AdsenseAccountsAdunitsCustomchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListSecurityOption2, _super);
    function AdsenseAccountsAdunitsCustomchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListSecurityOption2 };
var AdsenseAccountsAdunitsCustomchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListSecurity, _super);
    function AdsenseAccountsAdunitsCustomchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsCustomchannelsListSecurityOption1)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdunitsCustomchannelsListSecurityOption2)
    ], AdsenseAccountsAdunitsCustomchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListSecurity };
var AdsenseAccountsAdunitsCustomchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListRequest, _super);
    function AdsenseAccountsAdunitsCustomchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsCustomchannelsListPathParams)
    ], AdsenseAccountsAdunitsCustomchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsCustomchannelsListQueryParams)
    ], AdsenseAccountsAdunitsCustomchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdunitsCustomchannelsListSecurity)
    ], AdsenseAccountsAdunitsCustomchannelsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListRequest };
var AdsenseAccountsAdunitsCustomchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdunitsCustomchannelsListResponse, _super);
    function AdsenseAccountsAdunitsCustomchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdunitsCustomchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannels)
    ], AdsenseAccountsAdunitsCustomchannelsListResponse.prototype, "customChannels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdunitsCustomchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdunitsCustomchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdunitsCustomchannelsListResponse };
