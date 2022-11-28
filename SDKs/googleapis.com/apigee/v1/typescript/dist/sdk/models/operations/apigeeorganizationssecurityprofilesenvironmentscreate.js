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
var ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams };
var ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams };
var ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity };
var ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsCreatePathParams)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsCreateQueryParams)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesEnvironmentsCreateSecurity)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest };
var ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse, _super);
    function ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse.prototype, "googleCloudApigeeV1SecurityProfileEnvironmentAssociation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse };
