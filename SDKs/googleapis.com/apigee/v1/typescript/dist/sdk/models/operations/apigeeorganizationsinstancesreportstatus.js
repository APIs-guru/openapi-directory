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
var ApigeeOrganizationsInstancesReportStatusPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesReportStatusPathParams, _super);
    function ApigeeOrganizationsInstancesReportStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusPathParams.prototype, "instance", void 0);
    return ApigeeOrganizationsInstancesReportStatusPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesReportStatusPathParams };
var ApigeeOrganizationsInstancesReportStatusQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesReportStatusQueryParams, _super);
    function ApigeeOrganizationsInstancesReportStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsInstancesReportStatusQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesReportStatusQueryParams };
var ApigeeOrganizationsInstancesReportStatusSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesReportStatusSecurity, _super);
    function ApigeeOrganizationsInstancesReportStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsInstancesReportStatusSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsInstancesReportStatusSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsInstancesReportStatusSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesReportStatusSecurity };
var ApigeeOrganizationsInstancesReportStatusRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesReportStatusRequest, _super);
    function ApigeeOrganizationsInstancesReportStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesReportStatusPathParams)
    ], ApigeeOrganizationsInstancesReportStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesReportStatusQueryParams)
    ], ApigeeOrganizationsInstancesReportStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ReportInstanceStatusRequest)
    ], ApigeeOrganizationsInstancesReportStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesReportStatusSecurity)
    ], ApigeeOrganizationsInstancesReportStatusRequest.prototype, "security", void 0);
    return ApigeeOrganizationsInstancesReportStatusRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesReportStatusRequest };
var ApigeeOrganizationsInstancesReportStatusResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesReportStatusResponse, _super);
    function ApigeeOrganizationsInstancesReportStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesReportStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsInstancesReportStatusResponse.prototype, "googleCloudApigeeV1ReportInstanceStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesReportStatusResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsInstancesReportStatusResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesReportStatusResponse };
