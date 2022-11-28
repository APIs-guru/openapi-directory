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
var AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DealInput)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deal)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse.prototype, "deal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse };
