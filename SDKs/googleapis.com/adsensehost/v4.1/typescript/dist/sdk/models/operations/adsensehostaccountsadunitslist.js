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
var AdsensehostAccountsAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsListPathParams, _super);
    function AdsensehostAccountsAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListPathParams.prototype, "adClientId", void 0);
    return AdsensehostAccountsAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsListPathParams };
var AdsensehostAccountsAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsListQueryParams, _super);
    function AdsensehostAccountsAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsListQueryParams };
var AdsensehostAccountsAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsListSecurity, _super);
    function AdsensehostAccountsAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdunitsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdunitsListSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsListSecurity };
var AdsensehostAccountsAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsListRequest, _super);
    function AdsensehostAccountsAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsListPathParams)
    ], AdsensehostAccountsAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsListQueryParams)
    ], AdsensehostAccountsAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsAdunitsListSecurity)
    ], AdsensehostAccountsAdunitsListRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdunitsListRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsListRequest };
var AdsensehostAccountsAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsListResponse, _super);
    function AdsensehostAccountsAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AdUnits)
    ], AdsensehostAccountsAdunitsListResponse.prototype, "adUnits", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdunitsListResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsAdunitsListResponse };
