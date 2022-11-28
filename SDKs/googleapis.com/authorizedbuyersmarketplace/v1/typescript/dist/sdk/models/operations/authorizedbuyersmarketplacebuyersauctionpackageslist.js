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
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams.prototype, "parent", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuctionPackagesResponse)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse.prototype, "listAuctionPackagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse };
