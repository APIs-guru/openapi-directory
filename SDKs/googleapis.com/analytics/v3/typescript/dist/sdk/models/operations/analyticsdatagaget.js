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
export var AnalyticsDataGaGetOutputEnum;
(function (AnalyticsDataGaGetOutputEnum) {
    AnalyticsDataGaGetOutputEnum["DataTable"] = "dataTable";
    AnalyticsDataGaGetOutputEnum["Json"] = "json";
})(AnalyticsDataGaGetOutputEnum || (AnalyticsDataGaGetOutputEnum = {}));
export var AnalyticsDataGaGetSamplingLevelEnum;
(function (AnalyticsDataGaGetSamplingLevelEnum) {
    AnalyticsDataGaGetSamplingLevelEnum["Default"] = "DEFAULT";
    AnalyticsDataGaGetSamplingLevelEnum["Faster"] = "FASTER";
    AnalyticsDataGaGetSamplingLevelEnum["HigherPrecision"] = "HIGHER_PRECISION";
})(AnalyticsDataGaGetSamplingLevelEnum || (AnalyticsDataGaGetSamplingLevelEnum = {}));
var AnalyticsDataGaGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetQueryParams, _super);
    function AnalyticsDataGaGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include-empty-rows" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataGaGetQueryParams.prototype, "includeEmptyRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataGaGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=samplingLevel" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "samplingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "segment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsDataGaGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsDataGaGetQueryParams };
var AnalyticsDataGaGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurityOption1, _super);
    function AnalyticsDataGaGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGaGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGaGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsDataGaGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsDataGaGetSecurityOption1 };
var AnalyticsDataGaGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurityOption2, _super);
    function AnalyticsDataGaGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGaGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGaGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsDataGaGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsDataGaGetSecurityOption2 };
var AnalyticsDataGaGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetSecurity, _super);
    function AnalyticsDataGaGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGaGetSecurityOption1)
    ], AnalyticsDataGaGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGaGetSecurityOption2)
    ], AnalyticsDataGaGetSecurity.prototype, "option2", void 0);
    return AnalyticsDataGaGetSecurity;
}(SpeakeasyBase));
export { AnalyticsDataGaGetSecurity };
var AnalyticsDataGaGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetRequest, _super);
    function AnalyticsDataGaGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsDataGaGetQueryParams)
    ], AnalyticsDataGaGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsDataGaGetSecurity)
    ], AnalyticsDataGaGetRequest.prototype, "security", void 0);
    return AnalyticsDataGaGetRequest;
}(SpeakeasyBase));
export { AnalyticsDataGaGetRequest };
var AnalyticsDataGaGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsDataGaGetResponse, _super);
    function AnalyticsDataGaGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsDataGaGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GaData)
    ], AnalyticsDataGaGetResponse.prototype, "gaData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsDataGaGetResponse.prototype, "statusCode", void 0);
    return AnalyticsDataGaGetResponse;
}(SpeakeasyBase));
export { AnalyticsDataGaGetResponse };
