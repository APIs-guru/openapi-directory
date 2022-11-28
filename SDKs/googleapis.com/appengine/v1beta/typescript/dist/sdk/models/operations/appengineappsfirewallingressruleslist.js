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
var AppengineAppsFirewallIngressRulesListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListPathParams, _super);
    function AppengineAppsFirewallIngressRulesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListPathParams.prototype, "appsId", void 0);
    return AppengineAppsFirewallIngressRulesListPathParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListPathParams };
var AppengineAppsFirewallIngressRulesListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListQueryParams, _super);
    function AppengineAppsFirewallIngressRulesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchingAddress" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "matchingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsFirewallIngressRulesListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListQueryParams };
var AppengineAppsFirewallIngressRulesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListSecurityOption1, _super);
    function AppengineAppsFirewallIngressRulesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListSecurityOption1 };
var AppengineAppsFirewallIngressRulesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListSecurityOption2, _super);
    function AppengineAppsFirewallIngressRulesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListSecurityOption2 };
var AppengineAppsFirewallIngressRulesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListSecurityOption3, _super);
    function AppengineAppsFirewallIngressRulesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListSecurityOption3 };
var AppengineAppsFirewallIngressRulesListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListSecurity, _super);
    function AppengineAppsFirewallIngressRulesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListSecurityOption1)
    ], AppengineAppsFirewallIngressRulesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListSecurityOption2)
    ], AppengineAppsFirewallIngressRulesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListSecurityOption3)
    ], AppengineAppsFirewallIngressRulesListSecurity.prototype, "option3", void 0);
    return AppengineAppsFirewallIngressRulesListSecurity;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListSecurity };
var AppengineAppsFirewallIngressRulesListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListRequest, _super);
    function AppengineAppsFirewallIngressRulesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListPathParams)
    ], AppengineAppsFirewallIngressRulesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListQueryParams)
    ], AppengineAppsFirewallIngressRulesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesListSecurity)
    ], AppengineAppsFirewallIngressRulesListRequest.prototype, "security", void 0);
    return AppengineAppsFirewallIngressRulesListRequest;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListRequest };
var AppengineAppsFirewallIngressRulesListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesListResponse, _super);
    function AppengineAppsFirewallIngressRulesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListIngressRulesResponse)
    ], AppengineAppsFirewallIngressRulesListResponse.prototype, "listIngressRulesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesListResponse.prototype, "statusCode", void 0);
    return AppengineAppsFirewallIngressRulesListResponse;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesListResponse };
