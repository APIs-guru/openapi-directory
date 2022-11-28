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
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest };
var AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientUser)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse.prototype, "clientUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse };
