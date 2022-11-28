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
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=override" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "override", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAccount" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest };
var ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse, _super);
    function ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Deployment)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse.prototype, "googleCloudApigeeV1Deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse };
