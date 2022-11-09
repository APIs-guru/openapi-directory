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
var AppengineAppsFirewallIngressRulesPatchPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesPatchPathParams, _super);
    function AppengineAppsFirewallIngressRulesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ingressRulesId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchPathParams.prototype, "ingressRulesId", void 0);
    return AppengineAppsFirewallIngressRulesPatchPathParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesPatchPathParams };
var AppengineAppsFirewallIngressRulesPatchQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesPatchQueryParams, _super);
    function AppengineAppsFirewallIngressRulesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsFirewallIngressRulesPatchQueryParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesPatchQueryParams };
var AppengineAppsFirewallIngressRulesPatchSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesPatchSecurity, _super);
    function AppengineAppsFirewallIngressRulesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesPatchSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesPatchSecurity;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesPatchSecurity };
var AppengineAppsFirewallIngressRulesPatchRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesPatchRequest, _super);
    function AppengineAppsFirewallIngressRulesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesPatchPathParams)
    ], AppengineAppsFirewallIngressRulesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesPatchQueryParams)
    ], AppengineAppsFirewallIngressRulesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FirewallRule)
    ], AppengineAppsFirewallIngressRulesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesPatchSecurity)
    ], AppengineAppsFirewallIngressRulesPatchRequest.prototype, "security", void 0);
    return AppengineAppsFirewallIngressRulesPatchRequest;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesPatchRequest };
var AppengineAppsFirewallIngressRulesPatchResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesPatchResponse, _super);
    function AppengineAppsFirewallIngressRulesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FirewallRule)
    ], AppengineAppsFirewallIngressRulesPatchResponse.prototype, "firewallRule", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesPatchResponse.prototype, "statusCode", void 0);
    return AppengineAppsFirewallIngressRulesPatchResponse;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesPatchResponse };
