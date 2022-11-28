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
var AdsenseAccountsAdclientsAdunitsCreatePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsCreatePathParams, _super);
    function AdsenseAccountsAdclientsAdunitsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreatePathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsAdunitsCreatePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsCreatePathParams };
var AdsenseAccountsAdclientsAdunitsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsCreateQueryParams, _super);
    function AdsenseAccountsAdclientsAdunitsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsAdunitsCreateQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsCreateQueryParams };
var AdsenseAccountsAdclientsAdunitsCreateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsCreateSecurity, _super);
    function AdsenseAccountsAdclientsAdunitsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsAdunitsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsAdunitsCreateSecurity.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsAdunitsCreateSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsCreateSecurity };
var AdsenseAccountsAdclientsAdunitsCreateRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsCreateRequest, _super);
    function AdsenseAccountsAdclientsAdunitsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsCreatePathParams)
    ], AdsenseAccountsAdclientsAdunitsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsCreateQueryParams)
    ], AdsenseAccountsAdclientsAdunitsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdUnitInput)
    ], AdsenseAccountsAdclientsAdunitsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsAdunitsCreateSecurity)
    ], AdsenseAccountsAdclientsAdunitsCreateRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsAdunitsCreateRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsCreateRequest };
var AdsenseAccountsAdclientsAdunitsCreateResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsAdunitsCreateResponse, _super);
    function AdsenseAccountsAdclientsAdunitsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsenseAccountsAdclientsAdunitsCreateResponse.prototype, "adUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsAdunitsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsAdunitsCreateResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsAdunitsCreateResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsAdunitsCreateResponse };
