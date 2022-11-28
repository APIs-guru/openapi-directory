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
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=override" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "override", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest };
var ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse, _super);
    function ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeploymentChangeReport)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse.prototype, "googleCloudApigeeV1DeploymentChangeReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse };
