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
var AnalyticsManagementUnsampledReportsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListPathParams, _super);
    function AnalyticsManagementUnsampledReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUnsampledReportsListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListPathParams };
var AnalyticsManagementUnsampledReportsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListQueryParams, _super);
    function AnalyticsManagementUnsampledReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUnsampledReportsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListQueryParams };
var AnalyticsManagementUnsampledReportsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListSecurityOption1, _super);
    function AnalyticsManagementUnsampledReportsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListSecurityOption1 };
var AnalyticsManagementUnsampledReportsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListSecurityOption2, _super);
    function AnalyticsManagementUnsampledReportsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListSecurityOption2 };
var AnalyticsManagementUnsampledReportsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListSecurityOption3, _super);
    function AnalyticsManagementUnsampledReportsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListSecurityOption3 };
var AnalyticsManagementUnsampledReportsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListSecurity, _super);
    function AnalyticsManagementUnsampledReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListSecurityOption1)
    ], AnalyticsManagementUnsampledReportsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListSecurityOption2)
    ], AnalyticsManagementUnsampledReportsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListSecurityOption3)
    ], AnalyticsManagementUnsampledReportsListSecurity.prototype, "option3", void 0);
    return AnalyticsManagementUnsampledReportsListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListSecurity };
var AnalyticsManagementUnsampledReportsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListRequest, _super);
    function AnalyticsManagementUnsampledReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListPathParams)
    ], AnalyticsManagementUnsampledReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListQueryParams)
    ], AnalyticsManagementUnsampledReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsListSecurity)
    ], AnalyticsManagementUnsampledReportsListRequest.prototype, "security", void 0);
    return AnalyticsManagementUnsampledReportsListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListRequest };
var AnalyticsManagementUnsampledReportsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsListResponse, _super);
    function AnalyticsManagementUnsampledReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnsampledReports)
    ], AnalyticsManagementUnsampledReportsListResponse.prototype, "unsampledReports", void 0);
    return AnalyticsManagementUnsampledReportsListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsListResponse };
