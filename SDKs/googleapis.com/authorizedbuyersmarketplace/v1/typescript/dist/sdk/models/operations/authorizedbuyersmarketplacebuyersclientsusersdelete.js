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
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeletePathParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse };
