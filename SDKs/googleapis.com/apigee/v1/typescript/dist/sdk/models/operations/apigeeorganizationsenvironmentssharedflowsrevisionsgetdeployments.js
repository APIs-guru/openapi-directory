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
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Deployment)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse.prototype, "googleCloudApigeeV1Deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse };
