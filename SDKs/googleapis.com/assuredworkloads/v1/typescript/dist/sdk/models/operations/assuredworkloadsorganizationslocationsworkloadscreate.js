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
var AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams.prototype, "parent", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=externalId" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "externalId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity.prototype, "oauth2c", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity };
var AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudAssuredworkloadsV1Workload)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest.prototype, "security", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest };
var AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse.prototype, "statusCode", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse };
