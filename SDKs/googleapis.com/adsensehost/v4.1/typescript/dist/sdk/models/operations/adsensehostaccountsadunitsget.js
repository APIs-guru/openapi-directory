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
var AdsensehostAccountsAdunitsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetPathParams, _super);
    function AdsensehostAccountsAdunitsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetPathParams.prototype, "adUnitId", void 0);
    return AdsensehostAccountsAdunitsGetPathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsGetPathParams };
var AdsensehostAccountsAdunitsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetQueryParams, _super);
    function AdsensehostAccountsAdunitsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdunitsGetQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsGetQueryParams };
var AdsensehostAccountsAdunitsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetSecurity, _super);
    function AdsensehostAccountsAdunitsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdunitsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdunitsGetSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdunitsGetSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsGetSecurity };
var AdsensehostAccountsAdunitsGetRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetRequest, _super);
    function AdsensehostAccountsAdunitsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetPathParams)
    ], AdsensehostAccountsAdunitsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetQueryParams)
    ], AdsensehostAccountsAdunitsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetSecurity)
    ], AdsensehostAccountsAdunitsGetRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdunitsGetRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsGetRequest };
var AdsensehostAccountsAdunitsGetResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetResponse, _super);
    function AdsensehostAccountsAdunitsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsensehostAccountsAdunitsGetResponse.prototype, "adUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsGetResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdunitsGetResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsGetResponse };
