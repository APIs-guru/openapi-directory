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
var ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileEnvironment" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams.prototype, "profileEnvironment", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams };
var ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams };
var ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity };
var ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresPathParams)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresQueryParams)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ComputeEnvironmentScoresRequest)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresSecurity)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest };
var ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ComputeEnvironmentScoresResponse)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse.prototype, "googleCloudApigeeV1ComputeEnvironmentScoresResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse };
