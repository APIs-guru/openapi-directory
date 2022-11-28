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
var AppengineProjectsLocationsApplicationsRepairPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsRepairPathParams, _super);
    function AppengineProjectsLocationsApplicationsRepairPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairPathParams.prototype, "applicationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairPathParams.prototype, "locationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsApplicationsRepairPathParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsRepairPathParams };
var AppengineProjectsLocationsApplicationsRepairQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsRepairQueryParams, _super);
    function AppengineProjectsLocationsApplicationsRepairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsApplicationsRepairQueryParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsRepairQueryParams };
var AppengineProjectsLocationsApplicationsRepairSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsRepairSecurity, _super);
    function AppengineProjectsLocationsApplicationsRepairSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsApplicationsRepairSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsApplicationsRepairSecurity.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsApplicationsRepairSecurity;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsRepairSecurity };
var AppengineProjectsLocationsApplicationsRepairRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsRepairRequest, _super);
    function AppengineProjectsLocationsApplicationsRepairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsRepairPathParams)
    ], AppengineProjectsLocationsApplicationsRepairRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsRepairQueryParams)
    ], AppengineProjectsLocationsApplicationsRepairRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AppengineProjectsLocationsApplicationsRepairRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsRepairSecurity)
    ], AppengineProjectsLocationsApplicationsRepairRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsApplicationsRepairRequest;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsRepairRequest };
var AppengineProjectsLocationsApplicationsRepairResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsRepairResponse, _super);
    function AppengineProjectsLocationsApplicationsRepairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsRepairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineProjectsLocationsApplicationsRepairResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsApplicationsRepairResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsApplicationsRepairResponse;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsRepairResponse };
