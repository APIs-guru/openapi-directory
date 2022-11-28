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
var AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams, _super);
    function AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams.prototype, "target", void 0);
    return AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams;
}(SpeakeasyBase));
export { AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams };
var AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams, _super);
    function AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams.prototype, "uploadProtocol", void 0);
    return AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams;
}(SpeakeasyBase));
export { AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams };
var AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity = /** @class */ (function (_super) {
    __extends(AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity, _super);
    function AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity.prototype, "oauth2c", void 0);
    return AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity;
}(SpeakeasyBase));
export { AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity };
var AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest = /** @class */ (function (_super) {
    __extends(AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest, _super);
    function AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest.prototype, "security", void 0);
    return AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest;
}(SpeakeasyBase));
export { AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest };
var AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse = /** @class */ (function (_super) {
    __extends(AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse, _super);
    function AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse.prototype, "googleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse.prototype, "statusCode", void 0);
    return AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse;
}(SpeakeasyBase));
export { AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse };
