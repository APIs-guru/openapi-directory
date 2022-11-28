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
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=auctionPackage" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams.prototype, "auctionPackage", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnsubscribeClientsRequest)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest };
var AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuctionPackage)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse.prototype, "auctionPackage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse };
