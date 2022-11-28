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
var AdsenseAccountsReportsSavedGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGeneratePathParams, _super);
    function AdsenseAccountsReportsSavedGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGeneratePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=savedReportId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGeneratePathParams.prototype, "savedReportId", void 0);
    return AdsenseAccountsReportsSavedGeneratePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGeneratePathParams };
var AdsenseAccountsReportsSavedGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateQueryParams, _super);
    function AdsenseAccountsReportsSavedGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsReportsSavedGenerateQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateQueryParams };
var AdsenseAccountsReportsSavedGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateSecurityOption1, _super);
    function AdsenseAccountsReportsSavedGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsSavedGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsSavedGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsSavedGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateSecurityOption1 };
var AdsenseAccountsReportsSavedGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateSecurityOption2, _super);
    function AdsenseAccountsReportsSavedGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsSavedGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsSavedGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsSavedGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateSecurityOption2 };
var AdsenseAccountsReportsSavedGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateSecurity, _super);
    function AdsenseAccountsReportsSavedGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsSavedGenerateSecurityOption1)
    ], AdsenseAccountsReportsSavedGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsSavedGenerateSecurityOption2)
    ], AdsenseAccountsReportsSavedGenerateSecurity.prototype, "option2", void 0);
    return AdsenseAccountsReportsSavedGenerateSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateSecurity };
var AdsenseAccountsReportsSavedGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateRequest, _super);
    function AdsenseAccountsReportsSavedGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsSavedGeneratePathParams)
    ], AdsenseAccountsReportsSavedGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsSavedGenerateQueryParams)
    ], AdsenseAccountsReportsSavedGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsSavedGenerateSecurity)
    ], AdsenseAccountsReportsSavedGenerateRequest.prototype, "security", void 0);
    return AdsenseAccountsReportsSavedGenerateRequest;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateRequest };
var AdsenseAccountsReportsSavedGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsSavedGenerateResponse, _super);
    function AdsenseAccountsReportsSavedGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdsenseReportsGenerateResponse)
    ], AdsenseAccountsReportsSavedGenerateResponse.prototype, "adsenseReportsGenerateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsSavedGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsSavedGenerateResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsReportsSavedGenerateResponse;
}(SpeakeasyBase));
export { AdsenseAccountsReportsSavedGenerateResponse };
