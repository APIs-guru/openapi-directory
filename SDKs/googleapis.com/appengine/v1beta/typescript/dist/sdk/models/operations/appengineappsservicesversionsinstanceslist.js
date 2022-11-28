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
var AppengineAppsServicesVersionsInstancesListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListPathParams, _super);
    function AppengineAppsServicesVersionsInstancesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListPathParams.prototype, "servicesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListPathParams.prototype, "versionsId", void 0);
    return AppengineAppsServicesVersionsInstancesListPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListPathParams };
var AppengineAppsServicesVersionsInstancesListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListQueryParams, _super);
    function AppengineAppsServicesVersionsInstancesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesVersionsInstancesListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListQueryParams };
var AppengineAppsServicesVersionsInstancesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListSecurityOption1, _super);
    function AppengineAppsServicesVersionsInstancesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListSecurityOption1 };
var AppengineAppsServicesVersionsInstancesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListSecurityOption2, _super);
    function AppengineAppsServicesVersionsInstancesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListSecurityOption2 };
var AppengineAppsServicesVersionsInstancesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListSecurityOption3, _super);
    function AppengineAppsServicesVersionsInstancesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListSecurityOption3 };
var AppengineAppsServicesVersionsInstancesListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListSecurity, _super);
    function AppengineAppsServicesVersionsInstancesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListSecurityOption1)
    ], AppengineAppsServicesVersionsInstancesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListSecurityOption2)
    ], AppengineAppsServicesVersionsInstancesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListSecurityOption3)
    ], AppengineAppsServicesVersionsInstancesListSecurity.prototype, "option3", void 0);
    return AppengineAppsServicesVersionsInstancesListSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListSecurity };
var AppengineAppsServicesVersionsInstancesListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListRequest, _super);
    function AppengineAppsServicesVersionsInstancesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListPathParams)
    ], AppengineAppsServicesVersionsInstancesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListQueryParams)
    ], AppengineAppsServicesVersionsInstancesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesListSecurity)
    ], AppengineAppsServicesVersionsInstancesListRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsInstancesListRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListRequest };
var AppengineAppsServicesVersionsInstancesListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesListResponse, _super);
    function AppengineAppsServicesVersionsInstancesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstancesResponse)
    ], AppengineAppsServicesVersionsInstancesListResponse.prototype, "listInstancesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsInstancesListResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesVersionsInstancesListResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesListResponse };
