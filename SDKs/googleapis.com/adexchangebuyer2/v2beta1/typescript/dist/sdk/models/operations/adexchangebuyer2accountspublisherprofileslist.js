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
var Adexchangebuyer2AccountsPublisherProfilesListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesListPathParams, _super);
    function Adexchangebuyer2AccountsPublisherProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListPathParams.prototype, "accountId", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesListPathParams };
var Adexchangebuyer2AccountsPublisherProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesListQueryParams, _super);
    function Adexchangebuyer2AccountsPublisherProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesListQueryParams };
var Adexchangebuyer2AccountsPublisherProfilesListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesListSecurity, _super);
    function Adexchangebuyer2AccountsPublisherProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsPublisherProfilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsPublisherProfilesListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesListSecurity };
var Adexchangebuyer2AccountsPublisherProfilesListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesListRequest, _super);
    function Adexchangebuyer2AccountsPublisherProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesListPathParams)
    ], Adexchangebuyer2AccountsPublisherProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesListQueryParams)
    ], Adexchangebuyer2AccountsPublisherProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsPublisherProfilesListSecurity)
    ], Adexchangebuyer2AccountsPublisherProfilesListRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesListRequest };
var Adexchangebuyer2AccountsPublisherProfilesListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsPublisherProfilesListResponse, _super);
    function Adexchangebuyer2AccountsPublisherProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsPublisherProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPublisherProfilesResponse)
    ], Adexchangebuyer2AccountsPublisherProfilesListResponse.prototype, "listPublisherProfilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsPublisherProfilesListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsPublisherProfilesListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsPublisherProfilesListResponse };
