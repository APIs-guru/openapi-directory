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
var AppengineAppsFirewallIngressRulesGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetPathParams, _super);
    function AppengineAppsFirewallIngressRulesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ingressRulesId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetPathParams.prototype, "ingressRulesId", void 0);
    return AppengineAppsFirewallIngressRulesGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetPathParams };
var AppengineAppsFirewallIngressRulesGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetQueryParams, _super);
    function AppengineAppsFirewallIngressRulesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsFirewallIngressRulesGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetQueryParams };
var AppengineAppsFirewallIngressRulesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetSecurityOption1, _super);
    function AppengineAppsFirewallIngressRulesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetSecurityOption1 };
var AppengineAppsFirewallIngressRulesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetSecurityOption2, _super);
    function AppengineAppsFirewallIngressRulesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetSecurityOption2 };
var AppengineAppsFirewallIngressRulesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetSecurityOption3, _super);
    function AppengineAppsFirewallIngressRulesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetSecurityOption3 };
var AppengineAppsFirewallIngressRulesGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetSecurity, _super);
    function AppengineAppsFirewallIngressRulesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetSecurityOption1)
    ], AppengineAppsFirewallIngressRulesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetSecurityOption2)
    ], AppengineAppsFirewallIngressRulesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetSecurityOption3)
    ], AppengineAppsFirewallIngressRulesGetSecurity.prototype, "option3", void 0);
    return AppengineAppsFirewallIngressRulesGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetSecurity };
var AppengineAppsFirewallIngressRulesGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetRequest, _super);
    function AppengineAppsFirewallIngressRulesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetPathParams)
    ], AppengineAppsFirewallIngressRulesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetQueryParams)
    ], AppengineAppsFirewallIngressRulesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesGetSecurity)
    ], AppengineAppsFirewallIngressRulesGetRequest.prototype, "security", void 0);
    return AppengineAppsFirewallIngressRulesGetRequest;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetRequest };
var AppengineAppsFirewallIngressRulesGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesGetResponse, _super);
    function AppengineAppsFirewallIngressRulesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirewallRule)
    ], AppengineAppsFirewallIngressRulesGetResponse.prototype, "firewallRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsFirewallIngressRulesGetResponse;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesGetResponse };
