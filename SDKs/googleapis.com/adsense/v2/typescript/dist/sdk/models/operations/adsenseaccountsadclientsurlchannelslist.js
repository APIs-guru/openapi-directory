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
var AdsenseAccountsAdclientsUrlchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListPathParams, _super);
    function AdsenseAccountsAdclientsUrlchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListPathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListPathParams };
var AdsenseAccountsAdclientsUrlchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListQueryParams, _super);
    function AdsenseAccountsAdclientsUrlchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListQueryParams };
var AdsenseAccountsAdclientsUrlchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListSecurityOption1, _super);
    function AdsenseAccountsAdclientsUrlchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListSecurityOption1 };
var AdsenseAccountsAdclientsUrlchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListSecurityOption2, _super);
    function AdsenseAccountsAdclientsUrlchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListSecurityOption2 };
var AdsenseAccountsAdclientsUrlchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListSecurity, _super);
    function AdsenseAccountsAdclientsUrlchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsUrlchannelsListSecurityOption1)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsUrlchannelsListSecurityOption2)
    ], AdsenseAccountsAdclientsUrlchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListSecurity };
var AdsenseAccountsAdclientsUrlchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListRequest, _super);
    function AdsenseAccountsAdclientsUrlchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsUrlchannelsListPathParams)
    ], AdsenseAccountsAdclientsUrlchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsUrlchannelsListQueryParams)
    ], AdsenseAccountsAdclientsUrlchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsUrlchannelsListSecurity)
    ], AdsenseAccountsAdclientsUrlchannelsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListRequest };
var AdsenseAccountsAdclientsUrlchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsUrlchannelsListResponse, _super);
    function AdsenseAccountsAdclientsUrlchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsUrlchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUrlChannelsResponse)
    ], AdsenseAccountsAdclientsUrlchannelsListResponse.prototype, "listUrlChannelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsUrlchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsUrlchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsUrlchannelsListResponse };
