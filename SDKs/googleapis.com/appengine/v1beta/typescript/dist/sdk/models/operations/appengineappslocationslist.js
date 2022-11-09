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
var AppengineAppsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListPathParams, _super);
    function AppengineAppsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListPathParams.prototype, "appsId", void 0);
    return AppengineAppsLocationsListPathParams;
}(SpeakeasyBase));
export { AppengineAppsLocationsListPathParams };
var AppengineAppsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListQueryParams, _super);
    function AppengineAppsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsLocationsListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsLocationsListQueryParams };
var AppengineAppsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListSecurityOption1, _super);
    function AppengineAppsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsLocationsListSecurityOption1 };
var AppengineAppsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListSecurityOption2, _super);
    function AppengineAppsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsLocationsListSecurityOption2 };
var AppengineAppsLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListSecurityOption3, _super);
    function AppengineAppsLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsLocationsListSecurityOption3 };
var AppengineAppsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListSecurity, _super);
    function AppengineAppsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsListSecurityOption1)
    ], AppengineAppsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsListSecurityOption2)
    ], AppengineAppsLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsListSecurityOption3)
    ], AppengineAppsLocationsListSecurity.prototype, "option3", void 0);
    return AppengineAppsLocationsListSecurity;
}(SpeakeasyBase));
export { AppengineAppsLocationsListSecurity };
var AppengineAppsLocationsListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListRequest, _super);
    function AppengineAppsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsLocationsListPathParams)
    ], AppengineAppsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsLocationsListQueryParams)
    ], AppengineAppsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsLocationsListSecurity)
    ], AppengineAppsLocationsListRequest.prototype, "security", void 0);
    return AppengineAppsLocationsListRequest;
}(SpeakeasyBase));
export { AppengineAppsLocationsListRequest };
var AppengineAppsLocationsListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsListResponse, _super);
    function AppengineAppsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], AppengineAppsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsLocationsListResponse.prototype, "statusCode", void 0);
    return AppengineAppsLocationsListResponse;
}(SpeakeasyBase));
export { AppengineAppsLocationsListResponse };
