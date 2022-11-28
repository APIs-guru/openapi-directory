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
var Adexchangebuyer2AccountsPublisherProfilesGetPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesGetPathParams, _super);
    function Adexchangebuyer2AccountsPublisherProfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publisherProfileId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetPathParams.prototype, "publisherProfileId", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesGetPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesGetPathParams };
var Adexchangebuyer2AccountsPublisherProfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesGetQueryParams, _super);
    function Adexchangebuyer2AccountsPublisherProfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesGetQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesGetQueryParams };
var Adexchangebuyer2AccountsPublisherProfilesGetSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesGetSecurity, _super);
    function Adexchangebuyer2AccountsPublisherProfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsPublisherProfilesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsPublisherProfilesGetSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesGetSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesGetSecurity };
var Adexchangebuyer2AccountsPublisherProfilesGetRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesGetRequest, _super);
    function Adexchangebuyer2AccountsPublisherProfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesGetPathParams)
    ], Adexchangebuyer2AccountsPublisherProfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesGetQueryParams)
    ], Adexchangebuyer2AccountsPublisherProfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesGetSecurity)
    ], Adexchangebuyer2AccountsPublisherProfilesGetRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesGetRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesGetRequest };
var Adexchangebuyer2AccountsPublisherProfilesGetResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesGetResponse, _super);
    function Adexchangebuyer2AccountsPublisherProfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublisherProfile)
    ], Adexchangebuyer2AccountsPublisherProfilesGetResponse.prototype, "publisherProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsPublisherProfilesGetResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesGetResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesGetResponse };
