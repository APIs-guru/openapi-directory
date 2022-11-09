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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AdsensehostAccountsAdunitsInsertPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsInsertPathParams, _super);
    function AdsensehostAccountsAdunitsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertPathParams.prototype, "adClientId", void 0);
    return AdsensehostAccountsAdunitsInsertPathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsInsertPathParams };
var AdsensehostAccountsAdunitsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsInsertQueryParams, _super);
    function AdsensehostAccountsAdunitsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdunitsInsertQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsInsertQueryParams };
var AdsensehostAccountsAdunitsInsertSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsInsertSecurity, _super);
    function AdsensehostAccountsAdunitsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdunitsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdunitsInsertSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdunitsInsertSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsInsertSecurity };
var AdsensehostAccountsAdunitsInsertRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsInsertRequest, _super);
    function AdsensehostAccountsAdunitsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsInsertPathParams)
    ], AdsensehostAccountsAdunitsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsInsertQueryParams)
    ], AdsensehostAccountsAdunitsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdUnit)
    ], AdsensehostAccountsAdunitsInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsInsertSecurity)
    ], AdsensehostAccountsAdunitsInsertRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdunitsInsertRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsInsertRequest };
var AdsensehostAccountsAdunitsInsertResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsInsertResponse, _super);
    function AdsensehostAccountsAdunitsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsensehostAccountsAdunitsInsertResponse.prototype, "adUnit", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsInsertResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdunitsInsertResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsInsertResponse };
