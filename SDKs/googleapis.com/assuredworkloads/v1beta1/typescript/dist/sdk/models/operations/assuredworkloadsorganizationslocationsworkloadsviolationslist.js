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
var AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams.prototype, "parent", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "intervalEndTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "intervalStartTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity.prototype, "oauth2c", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity };
var AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest.prototype, "security", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest };
var AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse.prototype, "googleCloudAssuredworkloadsV1beta1ListViolationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse.prototype, "statusCode", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse };
