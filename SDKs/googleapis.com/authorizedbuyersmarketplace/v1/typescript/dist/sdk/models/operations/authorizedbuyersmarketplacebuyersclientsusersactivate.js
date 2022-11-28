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
var AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity };
var AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest };
var AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientUser)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse.prototype, "clientUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse };
