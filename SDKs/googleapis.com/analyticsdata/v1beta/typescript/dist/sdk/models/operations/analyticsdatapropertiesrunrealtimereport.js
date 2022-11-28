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
var AnalyticsdataPropertiesRunRealtimeReportPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportPathParams, _super);
    function AnalyticsdataPropertiesRunRealtimeReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportPathParams.prototype, "property", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportPathParams };
var AnalyticsdataPropertiesRunRealtimeReportQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportQueryParams, _super);
    function AnalyticsdataPropertiesRunRealtimeReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportQueryParams };
var AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportSecurityOption1, _super);
    function AnalyticsdataPropertiesRunRealtimeReportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 };
var AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportSecurityOption2, _super);
    function AnalyticsdataPropertiesRunRealtimeReportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 };
var AnalyticsdataPropertiesRunRealtimeReportSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportSecurity, _super);
    function AnalyticsdataPropertiesRunRealtimeReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesRunRealtimeReportSecurityOption1)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesRunRealtimeReportSecurityOption2)
    ], AnalyticsdataPropertiesRunRealtimeReportSecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportSecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportSecurity };
var AnalyticsdataPropertiesRunRealtimeReportRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportRequest, _super);
    function AnalyticsdataPropertiesRunRealtimeReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunRealtimeReportPathParams)
    ], AnalyticsdataPropertiesRunRealtimeReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunRealtimeReportQueryParams)
    ], AnalyticsdataPropertiesRunRealtimeReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunRealtimeReportRequest)
    ], AnalyticsdataPropertiesRunRealtimeReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesRunRealtimeReportSecurity)
    ], AnalyticsdataPropertiesRunRealtimeReportRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportRequest };
var AnalyticsdataPropertiesRunRealtimeReportResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesRunRealtimeReportResponse, _super);
    function AnalyticsdataPropertiesRunRealtimeReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesRunRealtimeReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunRealtimeReportResponse)
    ], AnalyticsdataPropertiesRunRealtimeReportResponse.prototype, "runRealtimeReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesRunRealtimeReportResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesRunRealtimeReportResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesRunRealtimeReportResponse };
