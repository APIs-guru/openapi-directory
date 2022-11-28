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
var AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams, _super);
    function AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams.prototype, "name", void 0);
    return AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams };
var AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams, _super);
    function AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams };
var AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity, _super);
    function AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity.prototype, "oauth2c", void 0);
    return AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity };
var AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest, _super);
    function AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest.prototype, "security", void 0);
    return AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest };
var AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse = /** @class */ (function (_super) {
    __extends(AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse, _super);
    function AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublisherProfile)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse.prototype, "publisherProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse.prototype, "statusCode", void 0);
    return AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse;
}(SpeakeasyBase));
export { AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse };
