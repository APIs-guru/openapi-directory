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
var AppengineAppsServicesVersionsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListPathParams, _super);
    function AppengineAppsServicesVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListPathParams.prototype, "servicesId", void 0);
    return AppengineAppsServicesVersionsListPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListPathParams };
export var AppengineAppsServicesVersionsListViewEnum;
(function (AppengineAppsServicesVersionsListViewEnum) {
    AppengineAppsServicesVersionsListViewEnum["Basic"] = "BASIC";
    AppengineAppsServicesVersionsListViewEnum["Full"] = "FULL";
})(AppengineAppsServicesVersionsListViewEnum || (AppengineAppsServicesVersionsListViewEnum = {}));
var AppengineAppsServicesVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListQueryParams, _super);
    function AppengineAppsServicesVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListQueryParams.prototype, "view", void 0);
    return AppengineAppsServicesVersionsListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListQueryParams };
var AppengineAppsServicesVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListSecurityOption1, _super);
    function AppengineAppsServicesVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListSecurityOption1 };
var AppengineAppsServicesVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListSecurityOption2, _super);
    function AppengineAppsServicesVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListSecurityOption2 };
var AppengineAppsServicesVersionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListSecurityOption3, _super);
    function AppengineAppsServicesVersionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListSecurityOption3 };
var AppengineAppsServicesVersionsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListSecurity, _super);
    function AppengineAppsServicesVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsListSecurityOption1)
    ], AppengineAppsServicesVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsListSecurityOption2)
    ], AppengineAppsServicesVersionsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsListSecurityOption3)
    ], AppengineAppsServicesVersionsListSecurity.prototype, "option3", void 0);
    return AppengineAppsServicesVersionsListSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListSecurity };
var AppengineAppsServicesVersionsListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListRequest, _super);
    function AppengineAppsServicesVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsListPathParams)
    ], AppengineAppsServicesVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsListQueryParams)
    ], AppengineAppsServicesVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsListSecurity)
    ], AppengineAppsServicesVersionsListRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsListRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListRequest };
var AppengineAppsServicesVersionsListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsListResponse, _super);
    function AppengineAppsServicesVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListVersionsResponse)
    ], AppengineAppsServicesVersionsListResponse.prototype, "listVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsListResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesVersionsListResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsListResponse };
