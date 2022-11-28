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
var AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams.prototype, "parent", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateDealsRequestInput)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest };
var AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateDealsResponse)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse.prototype, "batchUpdateDealsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse };
