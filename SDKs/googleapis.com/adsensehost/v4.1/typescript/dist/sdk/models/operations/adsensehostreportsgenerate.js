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
var AdsensehostReportsGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostReportsGenerateQueryParams, _super);
    function AdsensehostReportsGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dimension" }),
        __metadata("design:type", Array)
    ], AdsensehostReportsGenerateQueryParams.prototype, "dimension", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Array)
    ], AdsensehostReportsGenerateQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsensehostReportsGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metric" }),
        __metadata("design:type", Array)
    ], AdsensehostReportsGenerateQueryParams.prototype, "metric", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostReportsGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], AdsensehostReportsGenerateQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsensehostReportsGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateQueryParams.prototype, "userIp", void 0);
    return AdsensehostReportsGenerateQueryParams;
}(SpeakeasyBase));
export { AdsensehostReportsGenerateQueryParams };
var AdsensehostReportsGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostReportsGenerateSecurity, _super);
    function AdsensehostReportsGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostReportsGenerateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostReportsGenerateSecurity.prototype, "oauth2c", void 0);
    return AdsensehostReportsGenerateSecurity;
}(SpeakeasyBase));
export { AdsensehostReportsGenerateSecurity };
var AdsensehostReportsGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsensehostReportsGenerateRequest, _super);
    function AdsensehostReportsGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostReportsGenerateQueryParams)
    ], AdsensehostReportsGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostReportsGenerateSecurity)
    ], AdsensehostReportsGenerateRequest.prototype, "security", void 0);
    return AdsensehostReportsGenerateRequest;
}(SpeakeasyBase));
export { AdsensehostReportsGenerateRequest };
var AdsensehostReportsGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsensehostReportsGenerateResponse, _super);
    function AdsensehostReportsGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostReportsGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Report)
    ], AdsensehostReportsGenerateResponse.prototype, "report", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostReportsGenerateResponse.prototype, "statusCode", void 0);
    return AdsensehostReportsGenerateResponse;
}(SpeakeasyBase));
export { AdsensehostReportsGenerateResponse };
