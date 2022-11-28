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
var AnalyticsdataPropertiesBatchRunReportsPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsPathParams, _super);
    function AnalyticsdataPropertiesBatchRunReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsPathParams.prototype, "property", void 0);
    return AnalyticsdataPropertiesBatchRunReportsPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsPathParams };
var AnalyticsdataPropertiesBatchRunReportsQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsQueryParams, _super);
    function AnalyticsdataPropertiesBatchRunReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesBatchRunReportsQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsQueryParams };
var AnalyticsdataPropertiesBatchRunReportsSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsSecurityOption1, _super);
    function AnalyticsdataPropertiesBatchRunReportsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesBatchRunReportsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesBatchRunReportsSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesBatchRunReportsSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsSecurityOption1 };
var AnalyticsdataPropertiesBatchRunReportsSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsSecurityOption2, _super);
    function AnalyticsdataPropertiesBatchRunReportsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesBatchRunReportsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesBatchRunReportsSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesBatchRunReportsSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsSecurityOption2 };
var AnalyticsdataPropertiesBatchRunReportsSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsSecurity, _super);
    function AnalyticsdataPropertiesBatchRunReportsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunReportsSecurityOption1)
    ], AnalyticsdataPropertiesBatchRunReportsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunReportsSecurityOption2)
    ], AnalyticsdataPropertiesBatchRunReportsSecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesBatchRunReportsSecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsSecurity };
var AnalyticsdataPropertiesBatchRunReportsRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsRequest, _super);
    function AnalyticsdataPropertiesBatchRunReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunReportsPathParams)
    ], AnalyticsdataPropertiesBatchRunReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunReportsQueryParams)
    ], AnalyticsdataPropertiesBatchRunReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchRunReportsRequest)
    ], AnalyticsdataPropertiesBatchRunReportsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesBatchRunReportsSecurity)
    ], AnalyticsdataPropertiesBatchRunReportsRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesBatchRunReportsRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsRequest };
var AnalyticsdataPropertiesBatchRunReportsResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesBatchRunReportsResponse, _super);
    function AnalyticsdataPropertiesBatchRunReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchRunReportsResponse)
    ], AnalyticsdataPropertiesBatchRunReportsResponse.prototype, "batchRunReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesBatchRunReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesBatchRunReportsResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesBatchRunReportsResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesBatchRunReportsResponse };
