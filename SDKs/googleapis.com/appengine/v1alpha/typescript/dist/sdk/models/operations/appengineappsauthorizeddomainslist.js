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
var AppengineAppsAuthorizedDomainsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListPathParams, _super);
    function AppengineAppsAuthorizedDomainsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListPathParams.prototype, "appsId", void 0);
    return AppengineAppsAuthorizedDomainsListPathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListPathParams };
var AppengineAppsAuthorizedDomainsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListQueryParams, _super);
    function AppengineAppsAuthorizedDomainsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsAuthorizedDomainsListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListQueryParams };
var AppengineAppsAuthorizedDomainsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListSecurityOption1, _super);
    function AppengineAppsAuthorizedDomainsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedDomainsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedDomainsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedDomainsListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListSecurityOption1 };
var AppengineAppsAuthorizedDomainsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListSecurityOption2, _super);
    function AppengineAppsAuthorizedDomainsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedDomainsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedDomainsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedDomainsListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListSecurityOption2 };
var AppengineAppsAuthorizedDomainsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListSecurityOption3, _super);
    function AppengineAppsAuthorizedDomainsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedDomainsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedDomainsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedDomainsListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListSecurityOption3 };
var AppengineAppsAuthorizedDomainsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListSecurity, _super);
    function AppengineAppsAuthorizedDomainsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListSecurityOption1)
    ], AppengineAppsAuthorizedDomainsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListSecurityOption2)
    ], AppengineAppsAuthorizedDomainsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListSecurityOption3)
    ], AppengineAppsAuthorizedDomainsListSecurity.prototype, "option3", void 0);
    return AppengineAppsAuthorizedDomainsListSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListSecurity };
var AppengineAppsAuthorizedDomainsListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListRequest, _super);
    function AppengineAppsAuthorizedDomainsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListPathParams)
    ], AppengineAppsAuthorizedDomainsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListQueryParams)
    ], AppengineAppsAuthorizedDomainsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedDomainsListSecurity)
    ], AppengineAppsAuthorizedDomainsListRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedDomainsListRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListRequest };
var AppengineAppsAuthorizedDomainsListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedDomainsListResponse, _super);
    function AppengineAppsAuthorizedDomainsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedDomainsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuthorizedDomainsResponse)
    ], AppengineAppsAuthorizedDomainsListResponse.prototype, "listAuthorizedDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedDomainsListResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedDomainsListResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedDomainsListResponse };
