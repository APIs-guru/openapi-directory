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
var AdsensehostAccountsAdunitsDeletePathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsDeletePathParams, _super);
    function AdsensehostAccountsAdunitsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeletePathParams.prototype, "adClientId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeletePathParams.prototype, "adUnitId", void 0);
    return AdsensehostAccountsAdunitsDeletePathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsDeletePathParams };
var AdsensehostAccountsAdunitsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsDeleteQueryParams, _super);
    function AdsensehostAccountsAdunitsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdunitsDeleteQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsDeleteQueryParams };
var AdsensehostAccountsAdunitsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsDeleteSecurity, _super);
    function AdsensehostAccountsAdunitsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdunitsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdunitsDeleteSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdunitsDeleteSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsDeleteSecurity };
var AdsensehostAccountsAdunitsDeleteRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsDeleteRequest, _super);
    function AdsensehostAccountsAdunitsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsDeletePathParams)
    ], AdsensehostAccountsAdunitsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsDeleteQueryParams)
    ], AdsensehostAccountsAdunitsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsDeleteSecurity)
    ], AdsensehostAccountsAdunitsDeleteRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdunitsDeleteRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsDeleteRequest };
var AdsensehostAccountsAdunitsDeleteResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsDeleteResponse, _super);
    function AdsensehostAccountsAdunitsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsensehostAccountsAdunitsDeleteResponse.prototype, "adUnit", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsDeleteResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdunitsDeleteResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsDeleteResponse };
