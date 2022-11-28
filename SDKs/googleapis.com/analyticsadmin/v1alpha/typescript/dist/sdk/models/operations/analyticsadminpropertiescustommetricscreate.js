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
var AnalyticsadminPropertiesCustomMetricsCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsCreatePathParams, _super);
    function AnalyticsadminPropertiesCustomMetricsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesCustomMetricsCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsCreatePathParams };
var AnalyticsadminPropertiesCustomMetricsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsCreateQueryParams, _super);
    function AnalyticsadminPropertiesCustomMetricsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesCustomMetricsCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsCreateQueryParams };
var AnalyticsadminPropertiesCustomMetricsCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsCreateSecurity, _super);
    function AnalyticsadminPropertiesCustomMetricsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomMetricsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomMetricsCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomMetricsCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsCreateSecurity };
var AnalyticsadminPropertiesCustomMetricsCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsCreateRequest, _super);
    function AnalyticsadminPropertiesCustomMetricsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsCreatePathParams)
    ], AnalyticsadminPropertiesCustomMetricsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsCreateQueryParams)
    ], AnalyticsadminPropertiesCustomMetricsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaCustomMetricInput)
    ], AnalyticsadminPropertiesCustomMetricsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsCreateSecurity)
    ], AnalyticsadminPropertiesCustomMetricsCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesCustomMetricsCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsCreateRequest };
var AnalyticsadminPropertiesCustomMetricsCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsCreateResponse, _super);
    function AnalyticsadminPropertiesCustomMetricsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaCustomMetric)
    ], AnalyticsadminPropertiesCustomMetricsCreateResponse.prototype, "googleAnalyticsAdminV1alphaCustomMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomMetricsCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesCustomMetricsCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsCreateResponse };
