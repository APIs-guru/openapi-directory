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
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams.prototype, "parent", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsListQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest };
var AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFinalizedDealsResponse)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse.prototype, "listFinalizedDealsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse };
