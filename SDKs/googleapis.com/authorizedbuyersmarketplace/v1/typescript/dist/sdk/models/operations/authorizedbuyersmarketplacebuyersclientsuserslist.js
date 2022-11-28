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
var AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams.prototype, "parent", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams };
var AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity };
var AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersListQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest };
var AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClientUsersResponse)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse.prototype, "listClientUsersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse };
