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
var AdsensehostAccountsReportsGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsReportsGeneratePathParams, _super);
    function AdsensehostAccountsReportsGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGeneratePathParams.prototype, "accountId", void 0);
    return AdsensehostAccountsReportsGeneratePathParams;
}(SpeakeasyBase));
export { AdsensehostAccountsReportsGeneratePathParams };
var AdsensehostAccountsReportsGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsReportsGenerateQueryParams, _super);
    function AdsensehostAccountsReportsGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dimension" }),
        __metadata("design:type", Array)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "dimension", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Array)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metric" }),
        __metadata("design:type", Array)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "metric", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsReportsGenerateQueryParams;
}(SpeakeasyBase));
export { AdsensehostAccountsReportsGenerateQueryParams };
var AdsensehostAccountsReportsGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsReportsGenerateSecurity, _super);
    function AdsensehostAccountsReportsGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsReportsGenerateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsReportsGenerateSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsReportsGenerateSecurity;
}(SpeakeasyBase));
export { AdsensehostAccountsReportsGenerateSecurity };
var AdsensehostAccountsReportsGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsReportsGenerateRequest, _super);
    function AdsensehostAccountsReportsGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsReportsGeneratePathParams)
    ], AdsensehostAccountsReportsGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsReportsGenerateQueryParams)
    ], AdsensehostAccountsReportsGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostAccountsReportsGenerateSecurity)
    ], AdsensehostAccountsReportsGenerateRequest.prototype, "security", void 0);
    return AdsensehostAccountsReportsGenerateRequest;
}(SpeakeasyBase));
export { AdsensehostAccountsReportsGenerateRequest };
var AdsensehostAccountsReportsGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsReportsGenerateResponse, _super);
    function AdsensehostAccountsReportsGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostAccountsReportsGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Report)
    ], AdsensehostAccountsReportsGenerateResponse.prototype, "report", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsReportsGenerateResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsReportsGenerateResponse;
}(SpeakeasyBase));
export { AdsensehostAccountsReportsGenerateResponse };
