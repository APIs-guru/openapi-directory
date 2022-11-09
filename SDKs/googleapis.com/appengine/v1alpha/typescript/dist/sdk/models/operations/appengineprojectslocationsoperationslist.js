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
var AppengineProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListPathParams, _super);
    function AppengineProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListPathParams.prototype, "locationsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListPathParams };
var AppengineProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListQueryParams, _super);
    function AppengineProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListQueryParams };
var AppengineProjectsLocationsOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListSecurityOption1, _super);
    function AppengineProjectsLocationsOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsListSecurityOption1;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListSecurityOption1 };
var AppengineProjectsLocationsOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListSecurityOption2, _super);
    function AppengineProjectsLocationsOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsListSecurityOption2;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListSecurityOption2 };
var AppengineProjectsLocationsOperationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListSecurityOption3, _super);
    function AppengineProjectsLocationsOperationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsListSecurityOption3;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListSecurityOption3 };
var AppengineProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListSecurity, _super);
    function AppengineProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsListSecurityOption1)
    ], AppengineProjectsLocationsOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsListSecurityOption2)
    ], AppengineProjectsLocationsOperationsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsListSecurityOption3)
    ], AppengineProjectsLocationsOperationsListSecurity.prototype, "option3", void 0);
    return AppengineProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListSecurity };
var AppengineProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListRequest, _super);
    function AppengineProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsListPathParams)
    ], AppengineProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsListQueryParams)
    ], AppengineProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsListSecurity)
    ], AppengineProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListRequest };
var AppengineProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsListResponse, _super);
    function AppengineProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], AppengineProjectsLocationsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsListResponse };
