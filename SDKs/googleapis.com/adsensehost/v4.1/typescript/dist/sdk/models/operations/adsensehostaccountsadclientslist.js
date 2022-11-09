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
var AdsensehostAccountsAdclientsListPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdclientsListPathParams, _super);
    function AdsensehostAccountsAdclientsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListPathParams.prototype, "accountId", void 0);
    return AdsensehostAccountsAdclientsListPathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdclientsListPathParams };
var AdsensehostAccountsAdclientsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdclientsListQueryParams, _super);
    function AdsensehostAccountsAdclientsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdclientsListQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdclientsListQueryParams };
var AdsensehostAccountsAdclientsListSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdclientsListSecurity, _super);
    function AdsensehostAccountsAdclientsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdclientsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdclientsListSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdclientsListSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsAdclientsListSecurity };
var AdsensehostAccountsAdclientsListRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdclientsListRequest, _super);
    function AdsensehostAccountsAdclientsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdclientsListPathParams)
    ], AdsensehostAccountsAdclientsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdclientsListQueryParams)
    ], AdsensehostAccountsAdclientsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdclientsListSecurity)
    ], AdsensehostAccountsAdclientsListRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdclientsListRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsAdclientsListRequest };
var AdsensehostAccountsAdclientsListResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdclientsListResponse, _super);
    function AdsensehostAccountsAdclientsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AdClients)
    ], AdsensehostAccountsAdclientsListResponse.prototype, "adClients", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdclientsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdclientsListResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdclientsListResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsAdclientsListResponse };
