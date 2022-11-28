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
var AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams };
var AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams };
var AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity };
var AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcceptProposalRequest)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest };
var AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse };
