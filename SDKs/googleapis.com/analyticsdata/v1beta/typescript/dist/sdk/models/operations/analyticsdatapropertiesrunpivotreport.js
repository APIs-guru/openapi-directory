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
var AnalyticsdataPropertiesRunPivotReportPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportPathParams, _super);
    function AnalyticsdataPropertiesRunPivotReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportPathParams.prototype, "property", void 0);
    return AnalyticsdataPropertiesRunPivotReportPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportPathParams };
var AnalyticsdataPropertiesRunPivotReportQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportQueryParams, _super);
    function AnalyticsdataPropertiesRunPivotReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesRunPivotReportQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportQueryParams };
var AnalyticsdataPropertiesRunPivotReportSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportSecurityOption1, _super);
    function AnalyticsdataPropertiesRunPivotReportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesRunPivotReportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesRunPivotReportSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesRunPivotReportSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportSecurityOption1 };
var AnalyticsdataPropertiesRunPivotReportSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportSecurityOption2, _super);
    function AnalyticsdataPropertiesRunPivotReportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesRunPivotReportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesRunPivotReportSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesRunPivotReportSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportSecurityOption2 };
var AnalyticsdataPropertiesRunPivotReportSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportSecurity, _super);
    function AnalyticsdataPropertiesRunPivotReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesRunPivotReportSecurityOption1)
    ], AnalyticsdataPropertiesRunPivotReportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesRunPivotReportSecurityOption2)
    ], AnalyticsdataPropertiesRunPivotReportSecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesRunPivotReportSecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportSecurity };
var AnalyticsdataPropertiesRunPivotReportRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportRequest, _super);
    function AnalyticsdataPropertiesRunPivotReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunPivotReportPathParams)
    ], AnalyticsdataPropertiesRunPivotReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunPivotReportQueryParams)
    ], AnalyticsdataPropertiesRunPivotReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunPivotReportRequest)
    ], AnalyticsdataPropertiesRunPivotReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunPivotReportSecurity)
    ], AnalyticsdataPropertiesRunPivotReportRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesRunPivotReportRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportRequest };
var AnalyticsdataPropertiesRunPivotReportResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunPivotReportResponse, _super);
    function AnalyticsdataPropertiesRunPivotReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunPivotReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunPivotReportResponse)
    ], AnalyticsdataPropertiesRunPivotReportResponse.prototype, "runPivotReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesRunPivotReportResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesRunPivotReportResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunPivotReportResponse };
