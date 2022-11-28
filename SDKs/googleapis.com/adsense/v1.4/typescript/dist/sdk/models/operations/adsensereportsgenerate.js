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
var AdsenseReportsGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateQueryParams, _super);
    function AdsenseReportsGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", Array)
    ], AdsenseReportsGenerateQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimension" }),
        __metadata("design:type", Array)
    ], AdsenseReportsGenerateQueryParams.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Array)
    ], AdsenseReportsGenerateQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseReportsGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metric" }),
        __metadata("design:type", Array)
    ], AdsenseReportsGenerateQueryParams.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseReportsGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], AdsenseReportsGenerateQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsenseReportsGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useTimezoneReporting" }),
        __metadata("design:type", Boolean)
    ], AdsenseReportsGenerateQueryParams.prototype, "useTimezoneReporting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateQueryParams.prototype, "userIp", void 0);
    return AdsenseReportsGenerateQueryParams;
}(SpeakeasyBase));
export { AdsenseReportsGenerateQueryParams };
var AdsenseReportsGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateSecurityOption1, _super);
    function AdsenseReportsGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseReportsGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdsenseReportsGenerateSecurityOption1 };
var AdsenseReportsGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateSecurityOption2, _super);
    function AdsenseReportsGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseReportsGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdsenseReportsGenerateSecurityOption2 };
var AdsenseReportsGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateSecurity, _super);
    function AdsenseReportsGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsGenerateSecurityOption1)
    ], AdsenseReportsGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsGenerateSecurityOption2)
    ], AdsenseReportsGenerateSecurity.prototype, "option2", void 0);
    return AdsenseReportsGenerateSecurity;
}(SpeakeasyBase));
export { AdsenseReportsGenerateSecurity };
var AdsenseReportsGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateRequest, _super);
    function AdsenseReportsGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsGenerateQueryParams)
    ], AdsenseReportsGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsGenerateSecurity)
    ], AdsenseReportsGenerateRequest.prototype, "security", void 0);
    return AdsenseReportsGenerateRequest;
}(SpeakeasyBase));
export { AdsenseReportsGenerateRequest };
var AdsenseReportsGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsenseReportsGenerateResponse, _super);
    function AdsenseReportsGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdsenseReportsGenerateResponse)
    ], AdsenseReportsGenerateResponse.prototype, "adsenseReportsGenerateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseReportsGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseReportsGenerateResponse.prototype, "statusCode", void 0);
    return AdsenseReportsGenerateResponse;
}(SpeakeasyBase));
export { AdsenseReportsGenerateResponse };
