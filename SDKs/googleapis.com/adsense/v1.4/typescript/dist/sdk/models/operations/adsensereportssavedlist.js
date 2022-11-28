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
var AdsenseReportsSavedListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListQueryParams, _super);
    function AdsenseReportsSavedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseReportsSavedListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseReportsSavedListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListQueryParams.prototype, "userIp", void 0);
    return AdsenseReportsSavedListQueryParams;
}(SpeakeasyBase));
export { AdsenseReportsSavedListQueryParams };
var AdsenseReportsSavedListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListSecurityOption1, _super);
    function AdsenseReportsSavedListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsSavedListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsSavedListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseReportsSavedListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseReportsSavedListSecurityOption1 };
var AdsenseReportsSavedListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListSecurityOption2, _super);
    function AdsenseReportsSavedListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseReportsSavedListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseReportsSavedListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseReportsSavedListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseReportsSavedListSecurityOption2 };
var AdsenseReportsSavedListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListSecurity, _super);
    function AdsenseReportsSavedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsSavedListSecurityOption1)
    ], AdsenseReportsSavedListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseReportsSavedListSecurityOption2)
    ], AdsenseReportsSavedListSecurity.prototype, "option2", void 0);
    return AdsenseReportsSavedListSecurity;
}(SpeakeasyBase));
export { AdsenseReportsSavedListSecurity };
var AdsenseReportsSavedListRequest = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListRequest, _super);
    function AdsenseReportsSavedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsSavedListQueryParams)
    ], AdsenseReportsSavedListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseReportsSavedListSecurity)
    ], AdsenseReportsSavedListRequest.prototype, "security", void 0);
    return AdsenseReportsSavedListRequest;
}(SpeakeasyBase));
export { AdsenseReportsSavedListRequest };
var AdsenseReportsSavedListResponse = /** @class */ (function (_super) {
    __extends(AdsenseReportsSavedListResponse, _super);
    function AdsenseReportsSavedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseReportsSavedListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedReports)
    ], AdsenseReportsSavedListResponse.prototype, "savedReports", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseReportsSavedListResponse.prototype, "statusCode", void 0);
    return AdsenseReportsSavedListResponse;
}(SpeakeasyBase));
export { AdsenseReportsSavedListResponse };
