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
var AnalyticsManagementCustomMetricsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetPathParams, _super);
    function AnalyticsManagementCustomMetricsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customMetricId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetPathParams.prototype, "customMetricId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetPathParams };
var AnalyticsManagementCustomMetricsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetQueryParams, _super);
    function AnalyticsManagementCustomMetricsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetQueryParams };
var AnalyticsManagementCustomMetricsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetSecurityOption1, _super);
    function AnalyticsManagementCustomMetricsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetSecurityOption1 };
var AnalyticsManagementCustomMetricsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetSecurityOption2, _super);
    function AnalyticsManagementCustomMetricsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetSecurityOption2 };
var AnalyticsManagementCustomMetricsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetSecurity, _super);
    function AnalyticsManagementCustomMetricsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomMetricsGetSecurityOption1)
    ], AnalyticsManagementCustomMetricsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomMetricsGetSecurityOption2)
    ], AnalyticsManagementCustomMetricsGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementCustomMetricsGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetSecurity };
var AnalyticsManagementCustomMetricsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetRequest, _super);
    function AnalyticsManagementCustomMetricsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsGetPathParams)
    ], AnalyticsManagementCustomMetricsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsGetQueryParams)
    ], AnalyticsManagementCustomMetricsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsGetSecurity)
    ], AnalyticsManagementCustomMetricsGetRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetRequest };
var AnalyticsManagementCustomMetricsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsGetResponse, _super);
    function AnalyticsManagementCustomMetricsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomMetric)
    ], AnalyticsManagementCustomMetricsGetResponse.prototype, "customMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsGetResponse };
