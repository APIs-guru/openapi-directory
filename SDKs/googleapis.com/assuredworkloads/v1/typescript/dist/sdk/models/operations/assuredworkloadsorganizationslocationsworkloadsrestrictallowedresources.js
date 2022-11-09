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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams.prototype, "name", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams.prototype, "uploadProtocol", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity.prototype, "oauth2c", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity };
var AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest.prototype, "security", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest };
var AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse.prototype, "googleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse.prototype, "statusCode", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse };
