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
var AppengineAppsFirewallIngressRulesCreatePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesCreatePathParams, _super);
    function AppengineAppsFirewallIngressRulesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreatePathParams.prototype, "appsId", void 0);
    return AppengineAppsFirewallIngressRulesCreatePathParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesCreatePathParams };
var AppengineAppsFirewallIngressRulesCreateQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesCreateQueryParams, _super);
    function AppengineAppsFirewallIngressRulesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsFirewallIngressRulesCreateQueryParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesCreateQueryParams };
var AppengineAppsFirewallIngressRulesCreateSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesCreateSecurity, _super);
    function AppengineAppsFirewallIngressRulesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesCreateSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesCreateSecurity;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesCreateSecurity };
var AppengineAppsFirewallIngressRulesCreateRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesCreateRequest, _super);
    function AppengineAppsFirewallIngressRulesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesCreatePathParams)
    ], AppengineAppsFirewallIngressRulesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesCreateQueryParams)
    ], AppengineAppsFirewallIngressRulesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FirewallRule)
    ], AppengineAppsFirewallIngressRulesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesCreateSecurity)
    ], AppengineAppsFirewallIngressRulesCreateRequest.prototype, "security", void 0);
    return AppengineAppsFirewallIngressRulesCreateRequest;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesCreateRequest };
var AppengineAppsFirewallIngressRulesCreateResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesCreateResponse, _super);
    function AppengineAppsFirewallIngressRulesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FirewallRule)
    ], AppengineAppsFirewallIngressRulesCreateResponse.prototype, "firewallRule", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesCreateResponse.prototype, "statusCode", void 0);
    return AppengineAppsFirewallIngressRulesCreateResponse;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesCreateResponse };
