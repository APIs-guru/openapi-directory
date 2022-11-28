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
var DirectoryDomainsGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetPathParams, _super);
    function DirectoryDomainsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetPathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetPathParams.prototype, "domainName", void 0);
    return DirectoryDomainsGetPathParams;
}(SpeakeasyBase));
export { DirectoryDomainsGetPathParams };
var DirectoryDomainsGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetQueryParams, _super);
    function DirectoryDomainsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryDomainsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryDomainsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryDomainsGetQueryParams;
}(SpeakeasyBase));
export { DirectoryDomainsGetQueryParams };
var DirectoryDomainsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetSecurityOption1, _super);
    function DirectoryDomainsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryDomainsGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryDomainsGetSecurityOption1 };
var DirectoryDomainsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetSecurityOption2, _super);
    function DirectoryDomainsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryDomainsGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryDomainsGetSecurityOption2 };
var DirectoryDomainsGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetSecurity, _super);
    function DirectoryDomainsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainsGetSecurityOption1)
    ], DirectoryDomainsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainsGetSecurityOption2)
    ], DirectoryDomainsGetSecurity.prototype, "option2", void 0);
    return DirectoryDomainsGetSecurity;
}(SpeakeasyBase));
export { DirectoryDomainsGetSecurity };
var DirectoryDomainsGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetRequest, _super);
    function DirectoryDomainsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainsGetPathParams)
    ], DirectoryDomainsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainsGetQueryParams)
    ], DirectoryDomainsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainsGetSecurity)
    ], DirectoryDomainsGetRequest.prototype, "security", void 0);
    return DirectoryDomainsGetRequest;
}(SpeakeasyBase));
export { DirectoryDomainsGetRequest };
var DirectoryDomainsGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryDomainsGetResponse, _super);
    function DirectoryDomainsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryDomainsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domains)
    ], DirectoryDomainsGetResponse.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryDomainsGetResponse.prototype, "statusCode", void 0);
    return DirectoryDomainsGetResponse;
}(SpeakeasyBase));
export { DirectoryDomainsGetResponse };
