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
var AnalyticsManagementCustomMetricsInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsInsertPathParams, _super);
    function AnalyticsManagementCustomMetricsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsInsertPathParams };
var AnalyticsManagementCustomMetricsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsInsertQueryParams, _super);
    function AnalyticsManagementCustomMetricsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsInsertQueryParams };
var AnalyticsManagementCustomMetricsInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsInsertSecurity, _super);
    function AnalyticsManagementCustomMetricsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsInsertSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsInsertSecurity };
var AnalyticsManagementCustomMetricsInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsInsertRequest, _super);
    function AnalyticsManagementCustomMetricsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsInsertPathParams)
    ], AnalyticsManagementCustomMetricsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsInsertQueryParams)
    ], AnalyticsManagementCustomMetricsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomMetricInput)
    ], AnalyticsManagementCustomMetricsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsInsertSecurity)
    ], AnalyticsManagementCustomMetricsInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsInsertRequest };
var AnalyticsManagementCustomMetricsInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsInsertResponse, _super);
    function AnalyticsManagementCustomMetricsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomMetric)
    ], AnalyticsManagementCustomMetricsInsertResponse.prototype, "customMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsInsertResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsInsertResponse };
