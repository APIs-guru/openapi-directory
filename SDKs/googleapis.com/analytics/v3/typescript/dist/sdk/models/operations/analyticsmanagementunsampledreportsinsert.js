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
var AnalyticsManagementUnsampledReportsInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertPathParams, _super);
    function AnalyticsManagementUnsampledReportsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUnsampledReportsInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertPathParams };
var AnalyticsManagementUnsampledReportsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertQueryParams, _super);
    function AnalyticsManagementUnsampledReportsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUnsampledReportsInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertQueryParams };
var AnalyticsManagementUnsampledReportsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertSecurityOption1, _super);
    function AnalyticsManagementUnsampledReportsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsInsertSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertSecurityOption1 };
var AnalyticsManagementUnsampledReportsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertSecurityOption2, _super);
    function AnalyticsManagementUnsampledReportsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsInsertSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertSecurityOption2 };
var AnalyticsManagementUnsampledReportsInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertSecurity, _super);
    function AnalyticsManagementUnsampledReportsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsInsertSecurityOption1)
    ], AnalyticsManagementUnsampledReportsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsInsertSecurityOption2)
    ], AnalyticsManagementUnsampledReportsInsertSecurity.prototype, "option2", void 0);
    return AnalyticsManagementUnsampledReportsInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertSecurity };
var AnalyticsManagementUnsampledReportsInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertRequest, _super);
    function AnalyticsManagementUnsampledReportsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsInsertPathParams)
    ], AnalyticsManagementUnsampledReportsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsInsertQueryParams)
    ], AnalyticsManagementUnsampledReportsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnsampledReportInput)
    ], AnalyticsManagementUnsampledReportsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsInsertSecurity)
    ], AnalyticsManagementUnsampledReportsInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementUnsampledReportsInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertRequest };
var AnalyticsManagementUnsampledReportsInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsInsertResponse, _super);
    function AnalyticsManagementUnsampledReportsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnsampledReport)
    ], AnalyticsManagementUnsampledReportsInsertResponse.prototype, "unsampledReport", void 0);
    return AnalyticsManagementUnsampledReportsInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementUnsampledReportsInsertResponse };
