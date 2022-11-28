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
var AnalyticsdataPropertiesBatchRunPivotReportsPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsPathParams, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsPathParams.prototype, "property", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsPathParams };
var AnalyticsdataPropertiesBatchRunPivotReportsQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsQueryParams, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsQueryParams };
var AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1 };
var AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2 };
var AnalyticsdataPropertiesBatchRunPivotReportsSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsSecurity, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2)
    ], AnalyticsdataPropertiesBatchRunPivotReportsSecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsSecurity };
var AnalyticsdataPropertiesBatchRunPivotReportsRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsRequest, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunPivotReportsPathParams)
    ], AnalyticsdataPropertiesBatchRunPivotReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunPivotReportsQueryParams)
    ], AnalyticsdataPropertiesBatchRunPivotReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchRunPivotReportsRequest)
    ], AnalyticsdataPropertiesBatchRunPivotReportsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunPivotReportsSecurity)
    ], AnalyticsdataPropertiesBatchRunPivotReportsRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsRequest };
var AnalyticsdataPropertiesBatchRunPivotReportsResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunPivotReportsResponse, _super);
    function AnalyticsdataPropertiesBatchRunPivotReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchRunPivotReportsResponse)
    ], AnalyticsdataPropertiesBatchRunPivotReportsResponse.prototype, "batchRunPivotReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunPivotReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesBatchRunPivotReportsResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesBatchRunPivotReportsResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunPivotReportsResponse };
