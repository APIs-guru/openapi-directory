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
var AppengineAppsFirewallIngressRulesDeletePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesDeletePathParams, _super);
    function AppengineAppsFirewallIngressRulesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeletePathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ingressRulesId" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeletePathParams.prototype, "ingressRulesId", void 0);
    return AppengineAppsFirewallIngressRulesDeletePathParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesDeletePathParams };
var AppengineAppsFirewallIngressRulesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesDeleteQueryParams, _super);
    function AppengineAppsFirewallIngressRulesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsFirewallIngressRulesDeleteQueryParams;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesDeleteQueryParams };
var AppengineAppsFirewallIngressRulesDeleteSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesDeleteSecurity, _super);
    function AppengineAppsFirewallIngressRulesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsFirewallIngressRulesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsFirewallIngressRulesDeleteSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsFirewallIngressRulesDeleteSecurity;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesDeleteSecurity };
var AppengineAppsFirewallIngressRulesDeleteRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesDeleteRequest, _super);
    function AppengineAppsFirewallIngressRulesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesDeletePathParams)
    ], AppengineAppsFirewallIngressRulesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesDeleteQueryParams)
    ], AppengineAppsFirewallIngressRulesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsFirewallIngressRulesDeleteSecurity)
    ], AppengineAppsFirewallIngressRulesDeleteRequest.prototype, "security", void 0);
    return AppengineAppsFirewallIngressRulesDeleteRequest;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesDeleteRequest };
var AppengineAppsFirewallIngressRulesDeleteResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsFirewallIngressRulesDeleteResponse, _super);
    function AppengineAppsFirewallIngressRulesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsFirewallIngressRulesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AppengineAppsFirewallIngressRulesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsFirewallIngressRulesDeleteResponse.prototype, "statusCode", void 0);
    return AppengineAppsFirewallIngressRulesDeleteResponse;
}(SpeakeasyBase));
export { AppengineAppsFirewallIngressRulesDeleteResponse };
