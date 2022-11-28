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
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeploymentChangeReport)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse.prototype, "googleCloudApigeeV1DeploymentChangeReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse };
