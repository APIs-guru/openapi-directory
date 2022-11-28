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
var AdsenseAccountsCustomchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListPathParams, _super);
    function AdsenseAccountsCustomchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListPathParams.prototype, "adClientId", void 0);
    return AdsenseAccountsCustomchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListPathParams };
var AdsenseAccountsCustomchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListQueryParams, _super);
    function AdsenseAccountsCustomchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsCustomchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListQueryParams };
var AdsenseAccountsCustomchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListSecurityOption1, _super);
    function AdsenseAccountsCustomchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsCustomchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsCustomchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsCustomchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListSecurityOption1 };
var AdsenseAccountsCustomchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListSecurityOption2, _super);
    function AdsenseAccountsCustomchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsCustomchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsCustomchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsCustomchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListSecurityOption2 };
var AdsenseAccountsCustomchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListSecurity, _super);
    function AdsenseAccountsCustomchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsCustomchannelsListSecurityOption1)
    ], AdsenseAccountsCustomchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsCustomchannelsListSecurityOption2)
    ], AdsenseAccountsCustomchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsCustomchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListSecurity };
var AdsenseAccountsCustomchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListRequest, _super);
    function AdsenseAccountsCustomchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsListPathParams)
    ], AdsenseAccountsCustomchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsListQueryParams)
    ], AdsenseAccountsCustomchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsCustomchannelsListSecurity)
    ], AdsenseAccountsCustomchannelsListRequest.prototype, "security", void 0);
    return AdsenseAccountsCustomchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListRequest };
var AdsenseAccountsCustomchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsCustomchannelsListResponse, _super);
    function AdsenseAccountsCustomchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsCustomchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannels)
    ], AdsenseAccountsCustomchannelsListResponse.prototype, "customChannels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsCustomchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsCustomchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsCustomchannelsListResponse };
