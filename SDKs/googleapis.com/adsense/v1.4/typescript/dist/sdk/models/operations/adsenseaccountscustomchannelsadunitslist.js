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
var AdsenseAccountsCustomchannelsAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListPathParams, _super);
    function AdsenseAccountsCustomchannelsAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListPathParams.prototype, "customChannelId", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListPathParams };
var AdsenseAccountsCustomchannelsAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListQueryParams, _super);
    function AdsenseAccountsCustomchannelsAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListQueryParams };
var AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListSecurityOption1, _super);
    function AdsenseAccountsCustomchannelsAdunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 };
var AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListSecurityOption2, _super);
    function AdsenseAccountsCustomchannelsAdunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 };
var AdsenseAccountsCustomchannelsAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListSecurity, _super);
    function AdsenseAccountsCustomchannelsAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsCustomchannelsAdunitsListSecurityOption1)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsCustomchannelsAdunitsListSecurityOption2)
    ], AdsenseAccountsCustomchannelsAdunitsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListSecurity };
var AdsenseAccountsCustomchannelsAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListRequest, _super);
    function AdsenseAccountsCustomchannelsAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsAdunitsListPathParams)
    ], AdsenseAccountsCustomchannelsAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsAdunitsListQueryParams)
    ], AdsenseAccountsCustomchannelsAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsAdunitsListSecurity)
    ], AdsenseAccountsCustomchannelsAdunitsListRequest.prototype, "security", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListRequest };
var AdsenseAccountsCustomchannelsAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsAdunitsListResponse, _super);
    function AdsenseAccountsCustomchannelsAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnits)
    ], AdsenseAccountsCustomchannelsAdunitsListResponse.prototype, "adUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsCustomchannelsAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsCustomchannelsAdunitsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsAdunitsListResponse };
