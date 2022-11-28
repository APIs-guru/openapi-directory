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
var AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposal" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams.prototype, "proposal", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams };
var AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams };
var AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity };
var AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddNoteRequestInput)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest };
var AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse };
