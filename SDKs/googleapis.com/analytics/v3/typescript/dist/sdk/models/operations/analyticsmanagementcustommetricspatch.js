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
var AnalyticsManagementCustomMetricsPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchPathParams, _super);
    function AnalyticsManagementCustomMetricsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customMetricId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "customMetricId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsPatchPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsPatchPathParams };
var AnalyticsManagementCustomMetricsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchQueryParams, _super);
    function AnalyticsManagementCustomMetricsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreCustomDataSourceLinks" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "ignoreCustomDataSourceLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsPatchQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsPatchQueryParams };
var AnalyticsManagementCustomMetricsPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchSecurity, _super);
    function AnalyticsManagementCustomMetricsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsPatchSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsPatchSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsPatchSecurity };
var AnalyticsManagementCustomMetricsPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchRequest, _super);
    function AnalyticsManagementCustomMetricsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchPathParams)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchQueryParams)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomMetricInput)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchSecurity)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsPatchRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsPatchRequest };
var AnalyticsManagementCustomMetricsPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchResponse, _super);
    function AnalyticsManagementCustomMetricsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomMetric)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "customMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsPatchResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomMetricsPatchResponse };
