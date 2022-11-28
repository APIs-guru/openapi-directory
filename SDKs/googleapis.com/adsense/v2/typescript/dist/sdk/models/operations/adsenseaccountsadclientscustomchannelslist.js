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
var AdsenseAccountsAdclientsCustomchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListPathParams, _super);
    function AdsenseAccountsAdclientsCustomchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListPathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListPathParams };
var AdsenseAccountsAdclientsCustomchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListQueryParams, _super);
    function AdsenseAccountsAdclientsCustomchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListQueryParams };
var AdsenseAccountsAdclientsCustomchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListSecurityOption1, _super);
    function AdsenseAccountsAdclientsCustomchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListSecurityOption1 };
var AdsenseAccountsAdclientsCustomchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListSecurityOption2, _super);
    function AdsenseAccountsAdclientsCustomchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListSecurityOption2 };
var AdsenseAccountsAdclientsCustomchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListSecurity, _super);
    function AdsenseAccountsAdclientsCustomchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListSecurityOption1)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListSecurityOption2)
    ], AdsenseAccountsAdclientsCustomchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListSecurity };
var AdsenseAccountsAdclientsCustomchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListRequest, _super);
    function AdsenseAccountsAdclientsCustomchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListPathParams)
    ], AdsenseAccountsAdclientsCustomchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListQueryParams)
    ], AdsenseAccountsAdclientsCustomchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListSecurity)
    ], AdsenseAccountsAdclientsCustomchannelsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListRequest };
var AdsenseAccountsAdclientsCustomchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListResponse, _super);
    function AdsenseAccountsAdclientsCustomchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomChannelsResponse)
    ], AdsenseAccountsAdclientsCustomchannelsListResponse.prototype, "listCustomChannelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsCustomchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListResponse };
