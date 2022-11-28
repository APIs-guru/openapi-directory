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
var AdsenseReportsSavedGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGeneratePathParams, _super);
    function AdsenseReportsSavedGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=savedReportId" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGeneratePathParams.prototype, "savedReportId", void 0);
    return AdsenseReportsSavedGeneratePathParams;
}(SpeakeasyBase));
export { AdsenseReportsSavedGeneratePathParams };
var AdsenseReportsSavedGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateQueryParams, _super);
    function AdsenseReportsSavedGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateQueryParams.prototype, "userIp", void 0);
    return AdsenseReportsSavedGenerateQueryParams;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateQueryParams };
var AdsenseReportsSavedGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateSecurityOption1, _super);
    function AdsenseReportsSavedGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsSavedGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsSavedGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseReportsSavedGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateSecurityOption1 };
var AdsenseReportsSavedGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateSecurityOption2, _super);
    function AdsenseReportsSavedGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsSavedGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsSavedGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseReportsSavedGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateSecurityOption2 };
var AdsenseReportsSavedGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateSecurity, _super);
    function AdsenseReportsSavedGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsSavedGenerateSecurityOption1)
    ], AdsenseReportsSavedGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsSavedGenerateSecurityOption2)
    ], AdsenseReportsSavedGenerateSecurity.prototype, "option2", void 0);
    return AdsenseReportsSavedGenerateSecurity;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateSecurity };
var AdsenseReportsSavedGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateRequest, _super);
    function AdsenseReportsSavedGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsSavedGeneratePathParams)
    ], AdsenseReportsSavedGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsSavedGenerateQueryParams)
    ], AdsenseReportsSavedGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsSavedGenerateSecurity)
    ], AdsenseReportsSavedGenerateRequest.prototype, "security", void 0);
    return AdsenseReportsSavedGenerateRequest;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateRequest };
var AdsenseReportsSavedGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedGenerateResponse, _super);
    function AdsenseReportsSavedGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdsenseReportsGenerateResponse)
    ], AdsenseReportsSavedGenerateResponse.prototype, "adsenseReportsGenerateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseReportsSavedGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseReportsSavedGenerateResponse.prototype, "statusCode", void 0);
    return AdsenseReportsSavedGenerateResponse;
}(SpeakeasyBase));
export { AdsenseReportsSavedGenerateResponse };
