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
var AndroidenterpriseUsersGenerateAuthenticationTokenPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersGenerateAuthenticationTokenPathParams, _super);
    function AndroidenterpriseUsersGenerateAuthenticationTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenPathParams.prototype, "userId", void 0);
    return AndroidenterpriseUsersGenerateAuthenticationTokenPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseUsersGenerateAuthenticationTokenPathParams };
var AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams, _super);
    function AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams };
var AndroidenterpriseUsersGenerateAuthenticationTokenSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersGenerateAuthenticationTokenSecurity, _super);
    function AndroidenterpriseUsersGenerateAuthenticationTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseUsersGenerateAuthenticationTokenSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseUsersGenerateAuthenticationTokenSecurity };
var AndroidenterpriseUsersGenerateAuthenticationTokenRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersGenerateAuthenticationTokenRequest, _super);
    function AndroidenterpriseUsersGenerateAuthenticationTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersGenerateAuthenticationTokenPathParams)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersGenerateAuthenticationTokenSecurity)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenRequest.prototype, "security", void 0);
    return AndroidenterpriseUsersGenerateAuthenticationTokenRequest;
}(SpeakeasyBase));
export { AndroidenterpriseUsersGenerateAuthenticationTokenRequest };
var AndroidenterpriseUsersGenerateAuthenticationTokenResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersGenerateAuthenticationTokenResponse, _super);
    function AndroidenterpriseUsersGenerateAuthenticationTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationToken)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenResponse.prototype, "authenticationToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseUsersGenerateAuthenticationTokenResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseUsersGenerateAuthenticationTokenResponse;
}(SpeakeasyBase));
export { AndroidenterpriseUsersGenerateAuthenticationTokenResponse };
