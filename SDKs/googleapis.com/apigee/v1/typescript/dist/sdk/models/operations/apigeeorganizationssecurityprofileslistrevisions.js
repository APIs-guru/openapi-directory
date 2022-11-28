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
var ApigeeOrganizationsSecurityProfilesListRevisionsPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesListRevisionsPathParams, _super);
    function ApigeeOrganizationsSecurityProfilesListRevisionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsSecurityProfilesListRevisionsPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesListRevisionsPathParams };
var ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams, _super);
    function ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams };
var ApigeeOrganizationsSecurityProfilesListRevisionsSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesListRevisionsSecurity, _super);
    function ApigeeOrganizationsSecurityProfilesListRevisionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSecurityProfilesListRevisionsSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesListRevisionsSecurity };
var ApigeeOrganizationsSecurityProfilesListRevisionsRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesListRevisionsRequest, _super);
    function ApigeeOrganizationsSecurityProfilesListRevisionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesListRevisionsPathParams)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesListRevisionsQueryParams)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSecurityProfilesListRevisionsSecurity)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSecurityProfilesListRevisionsRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesListRevisionsRequest };
var ApigeeOrganizationsSecurityProfilesListRevisionsResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSecurityProfilesListRevisionsResponse, _super);
    function ApigeeOrganizationsSecurityProfilesListRevisionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsResponse.prototype, "googleCloudApigeeV1ListSecurityProfileRevisionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSecurityProfilesListRevisionsResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSecurityProfilesListRevisionsResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSecurityProfilesListRevisionsResponse };
