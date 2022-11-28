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
var BatchProjectsLocationsStateReportPathParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsStateReportPathParams, _super);
    function BatchProjectsLocationsStateReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportPathParams.prototype, "parent", void 0);
    return BatchProjectsLocationsStateReportPathParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsStateReportPathParams };
var BatchProjectsLocationsStateReportQueryParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsStateReportQueryParams, _super);
    function BatchProjectsLocationsStateReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportQueryParams.prototype, "uploadProtocol", void 0);
    return BatchProjectsLocationsStateReportQueryParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsStateReportQueryParams };
var BatchProjectsLocationsStateReportSecurity = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsStateReportSecurity, _super);
    function BatchProjectsLocationsStateReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BatchProjectsLocationsStateReportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BatchProjectsLocationsStateReportSecurity.prototype, "oauth2c", void 0);
    return BatchProjectsLocationsStateReportSecurity;
}(SpeakeasyBase));
export { BatchProjectsLocationsStateReportSecurity };
var BatchProjectsLocationsStateReportRequest = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsStateReportRequest, _super);
    function BatchProjectsLocationsStateReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsStateReportPathParams)
    ], BatchProjectsLocationsStateReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsStateReportQueryParams)
    ], BatchProjectsLocationsStateReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportAgentStateRequest)
    ], BatchProjectsLocationsStateReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsStateReportSecurity)
    ], BatchProjectsLocationsStateReportRequest.prototype, "security", void 0);
    return BatchProjectsLocationsStateReportRequest;
}(SpeakeasyBase));
export { BatchProjectsLocationsStateReportRequest };
var BatchProjectsLocationsStateReportResponse = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsStateReportResponse, _super);
    function BatchProjectsLocationsStateReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchProjectsLocationsStateReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportAgentStateResponse)
    ], BatchProjectsLocationsStateReportResponse.prototype, "reportAgentStateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsStateReportResponse.prototype, "statusCode", void 0);
    return BatchProjectsLocationsStateReportResponse;
}(SpeakeasyBase));
export { BatchProjectsLocationsStateReportResponse };
