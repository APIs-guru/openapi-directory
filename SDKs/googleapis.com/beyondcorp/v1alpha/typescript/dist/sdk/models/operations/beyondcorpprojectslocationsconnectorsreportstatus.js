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
var BeyondcorpProjectsLocationsConnectorsReportStatusPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsReportStatusPathParams, _super);
    function BeyondcorpProjectsLocationsConnectorsReportStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusPathParams.prototype, "connector", void 0);
    return BeyondcorpProjectsLocationsConnectorsReportStatusPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsReportStatusPathParams };
var BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams, _super);
    function BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams };
var BeyondcorpProjectsLocationsConnectorsReportStatusSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsReportStatusSecurity, _super);
    function BeyondcorpProjectsLocationsConnectorsReportStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsConnectorsReportStatusSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsReportStatusSecurity };
var BeyondcorpProjectsLocationsConnectorsReportStatusRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsReportStatusRequest, _super);
    function BeyondcorpProjectsLocationsConnectorsReportStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsReportStatusPathParams)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportStatusRequest)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsReportStatusSecurity)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsConnectorsReportStatusRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsReportStatusRequest };
var BeyondcorpProjectsLocationsConnectorsReportStatusResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsReportStatusResponse, _super);
    function BeyondcorpProjectsLocationsConnectorsReportStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectorsReportStatusResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsConnectorsReportStatusResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsReportStatusResponse };
