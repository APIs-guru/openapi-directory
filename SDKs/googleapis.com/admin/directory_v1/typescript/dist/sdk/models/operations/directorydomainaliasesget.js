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
var DirectoryDomainAliasesGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetPathParams, _super);
    function DirectoryDomainAliasesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetPathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainAliasName" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetPathParams.prototype, "domainAliasName", void 0);
    return DirectoryDomainAliasesGetPathParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetPathParams };
var DirectoryDomainAliasesGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetQueryParams, _super);
    function DirectoryDomainAliasesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryDomainAliasesGetQueryParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetQueryParams };
var DirectoryDomainAliasesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetSecurityOption1, _super);
    function DirectoryDomainAliasesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainAliasesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainAliasesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryDomainAliasesGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetSecurityOption1 };
var DirectoryDomainAliasesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetSecurityOption2, _super);
    function DirectoryDomainAliasesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainAliasesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainAliasesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryDomainAliasesGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetSecurityOption2 };
var DirectoryDomainAliasesGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetSecurity, _super);
    function DirectoryDomainAliasesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainAliasesGetSecurityOption1)
    ], DirectoryDomainAliasesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainAliasesGetSecurityOption2)
    ], DirectoryDomainAliasesGetSecurity.prototype, "option2", void 0);
    return DirectoryDomainAliasesGetSecurity;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetSecurity };
var DirectoryDomainAliasesGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetRequest, _super);
    function DirectoryDomainAliasesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesGetPathParams)
    ], DirectoryDomainAliasesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesGetQueryParams)
    ], DirectoryDomainAliasesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesGetSecurity)
    ], DirectoryDomainAliasesGetRequest.prototype, "security", void 0);
    return DirectoryDomainAliasesGetRequest;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetRequest };
var DirectoryDomainAliasesGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesGetResponse, _super);
    function DirectoryDomainAliasesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainAlias)
    ], DirectoryDomainAliasesGetResponse.prototype, "domainAlias", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryDomainAliasesGetResponse.prototype, "statusCode", void 0);
    return DirectoryDomainAliasesGetResponse;
}(SpeakeasyBase));
export { DirectoryDomainAliasesGetResponse };
