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
var AdsenseAccountsReportsGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGeneratePathParams, _super);
    function AdsenseAccountsReportsGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGeneratePathParams.prototype, "accountId", void 0);
    return AdsenseAccountsReportsGeneratePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGeneratePathParams };
var AdsenseAccountsReportsGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateQueryParams, _super);
    function AdsenseAccountsReportsGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimension" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metric" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useTimezoneReporting" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "useTimezoneReporting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsReportsGenerateQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateQueryParams };
var AdsenseAccountsReportsGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurityOption1, _super);
    function AdsenseAccountsReportsGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurityOption1 };
var AdsenseAccountsReportsGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurityOption2, _super);
    function AdsenseAccountsReportsGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurityOption2 };
var AdsenseAccountsReportsGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurity, _super);
    function AdsenseAccountsReportsGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurityOption1)
    ], AdsenseAccountsReportsGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurityOption2)
    ], AdsenseAccountsReportsGenerateSecurity.prototype, "option2", void 0);
    return AdsenseAccountsReportsGenerateSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurity };
var AdsenseAccountsReportsGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateRequest, _super);
    function AdsenseAccountsReportsGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGeneratePathParams)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateQueryParams)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurity)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "security", void 0);
    return AdsenseAccountsReportsGenerateRequest;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateRequest };
var AdsenseAccountsReportsGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateResponse, _super);
    function AdsenseAccountsReportsGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdsenseReportsGenerateResponse)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "adsenseReportsGenerateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsReportsGenerateResponse;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateResponse };
