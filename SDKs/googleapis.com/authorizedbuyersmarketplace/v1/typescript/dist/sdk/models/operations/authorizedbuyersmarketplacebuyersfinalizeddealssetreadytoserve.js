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
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deal" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams.prototype, "deal", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FinalizedDeal)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse.prototype, "finalizedDeal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse };
