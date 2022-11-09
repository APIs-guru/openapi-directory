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
var AnalyticsManagementAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListQueryParams, _super);
    function AnalyticsManagementAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementAccountsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListQueryParams };
var AnalyticsManagementAccountsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListSecurityOption1, _super);
    function AnalyticsManagementAccountsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListSecurityOption1 };
var AnalyticsManagementAccountsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListSecurityOption2, _super);
    function AnalyticsManagementAccountsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListSecurityOption2 };
var AnalyticsManagementAccountsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListSecurity, _super);
    function AnalyticsManagementAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountsListSecurityOption1)
    ], AnalyticsManagementAccountsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountsListSecurityOption2)
    ], AnalyticsManagementAccountsListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementAccountsListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListSecurity };
var AnalyticsManagementAccountsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListRequest, _super);
    function AnalyticsManagementAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsManagementAccountsListQueryParams)
    ], AnalyticsManagementAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsManagementAccountsListSecurity)
    ], AnalyticsManagementAccountsListRequest.prototype, "security", void 0);
    return AnalyticsManagementAccountsListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListRequest };
var AnalyticsManagementAccountsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountsListResponse, _super);
    function AnalyticsManagementAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementAccountsListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementAccountsListResponse };
