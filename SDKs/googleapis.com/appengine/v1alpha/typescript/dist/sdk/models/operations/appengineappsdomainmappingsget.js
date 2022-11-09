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
var AppengineAppsDomainMappingsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetPathParams, _super);
    function AppengineAppsDomainMappingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=domainMappingsId" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetPathParams.prototype, "domainMappingsId", void 0);
    return AppengineAppsDomainMappingsGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetPathParams };
var AppengineAppsDomainMappingsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetQueryParams, _super);
    function AppengineAppsDomainMappingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsDomainMappingsGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetQueryParams };
var AppengineAppsDomainMappingsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetSecurityOption1, _super);
    function AppengineAppsDomainMappingsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetSecurityOption1 };
var AppengineAppsDomainMappingsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetSecurityOption2, _super);
    function AppengineAppsDomainMappingsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetSecurityOption2 };
var AppengineAppsDomainMappingsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetSecurityOption3, _super);
    function AppengineAppsDomainMappingsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetSecurityOption3 };
var AppengineAppsDomainMappingsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetSecurity, _super);
    function AppengineAppsDomainMappingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsGetSecurityOption1)
    ], AppengineAppsDomainMappingsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsGetSecurityOption2)
    ], AppengineAppsDomainMappingsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsGetSecurityOption3)
    ], AppengineAppsDomainMappingsGetSecurity.prototype, "option3", void 0);
    return AppengineAppsDomainMappingsGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetSecurity };
var AppengineAppsDomainMappingsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetRequest, _super);
    function AppengineAppsDomainMappingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsDomainMappingsGetPathParams)
    ], AppengineAppsDomainMappingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsDomainMappingsGetQueryParams)
    ], AppengineAppsDomainMappingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsDomainMappingsGetSecurity)
    ], AppengineAppsDomainMappingsGetRequest.prototype, "security", void 0);
    return AppengineAppsDomainMappingsGetRequest;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetRequest };
var AppengineAppsDomainMappingsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsGetResponse, _super);
    function AppengineAppsDomainMappingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DomainMapping)
    ], AppengineAppsDomainMappingsGetResponse.prototype, "domainMapping", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsDomainMappingsGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsDomainMappingsGetResponse;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsGetResponse };
