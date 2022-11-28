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
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deal" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams.prototype, "deal", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddCreativeRequest)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FinalizedDeal)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse.prototype, "finalizedDeal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse };
