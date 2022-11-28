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
var AdsenseAccountsAdclientsAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListPathParams, _super);
    function AdsenseAccountsAdclientsAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListPathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListPathParams };
var AdsenseAccountsAdclientsAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListQueryParams, _super);
    function AdsenseAccountsAdclientsAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListQueryParams };
var AdsenseAccountsAdclientsAdunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListSecurityOption1, _super);
    function AdsenseAccountsAdclientsAdunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsAdunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsAdunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsAdunitsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListSecurityOption1 };
var AdsenseAccountsAdclientsAdunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListSecurityOption2, _super);
    function AdsenseAccountsAdclientsAdunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsAdunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsAdunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsAdunitsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListSecurityOption2 };
var AdsenseAccountsAdclientsAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListSecurity, _super);
    function AdsenseAccountsAdclientsAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsListSecurityOption1)
    ], AdsenseAccountsAdclientsAdunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsListSecurityOption2)
    ], AdsenseAccountsAdclientsAdunitsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListSecurity };
var AdsenseAccountsAdclientsAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListRequest, _super);
    function AdsenseAccountsAdclientsAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsListPathParams)
    ], AdsenseAccountsAdclientsAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsListQueryParams)
    ], AdsenseAccountsAdclientsAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsListSecurity)
    ], AdsenseAccountsAdclientsAdunitsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsAdunitsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListRequest };
var AdsenseAccountsAdclientsAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsListResponse, _super);
    function AdsenseAccountsAdclientsAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAdUnitsResponse)
    ], AdsenseAccountsAdclientsAdunitsListResponse.prototype, "listAdUnitsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsAdunitsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsListResponse };
