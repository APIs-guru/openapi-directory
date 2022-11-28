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
var AnalyticsManagementAccountSummariesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListQueryParams, _super);
    function AnalyticsManagementAccountSummariesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementAccountSummariesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListQueryParams };
var AnalyticsManagementAccountSummariesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListSecurityOption1, _super);
    function AnalyticsManagementAccountSummariesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountSummariesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountSummariesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountSummariesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListSecurityOption1 };
var AnalyticsManagementAccountSummariesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListSecurityOption2, _super);
    function AnalyticsManagementAccountSummariesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountSummariesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountSummariesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountSummariesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListSecurityOption2 };
var AnalyticsManagementAccountSummariesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListSecurity, _super);
    function AnalyticsManagementAccountSummariesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountSummariesListSecurityOption1)
    ], AnalyticsManagementAccountSummariesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountSummariesListSecurityOption2)
    ], AnalyticsManagementAccountSummariesListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementAccountSummariesListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListSecurity };
var AnalyticsManagementAccountSummariesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListRequest, _super);
    function AnalyticsManagementAccountSummariesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountSummariesListQueryParams)
    ], AnalyticsManagementAccountSummariesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountSummariesListSecurity)
    ], AnalyticsManagementAccountSummariesListRequest.prototype, "security", void 0);
    return AnalyticsManagementAccountSummariesListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListRequest };
var AnalyticsManagementAccountSummariesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountSummariesListResponse, _super);
    function AnalyticsManagementAccountSummariesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountSummaries)
    ], AnalyticsManagementAccountSummariesListResponse.prototype, "accountSummaries", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountSummariesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountSummariesListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementAccountSummariesListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementAccountSummariesListResponse };
