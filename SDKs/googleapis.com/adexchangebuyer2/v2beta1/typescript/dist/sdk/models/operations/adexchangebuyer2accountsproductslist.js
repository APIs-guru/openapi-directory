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
var Adexchangebuyer2AccountsProductsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProductsListPathParams, _super);
    function Adexchangebuyer2AccountsProductsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListPathParams.prototype, "accountId", void 0);
    return Adexchangebuyer2AccountsProductsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProductsListPathParams };
var Adexchangebuyer2AccountsProductsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProductsListQueryParams, _super);
    function Adexchangebuyer2AccountsProductsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProductsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProductsListQueryParams };
var Adexchangebuyer2AccountsProductsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProductsListSecurity, _super);
    function Adexchangebuyer2AccountsProductsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProductsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProductsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProductsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProductsListSecurity };
var Adexchangebuyer2AccountsProductsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProductsListRequest, _super);
    function Adexchangebuyer2AccountsProductsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProductsListPathParams)
    ], Adexchangebuyer2AccountsProductsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProductsListQueryParams)
    ], Adexchangebuyer2AccountsProductsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProductsListSecurity)
    ], Adexchangebuyer2AccountsProductsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProductsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProductsListRequest };
var Adexchangebuyer2AccountsProductsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProductsListResponse, _super);
    function Adexchangebuyer2AccountsProductsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProductsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProductsResponse)
    ], Adexchangebuyer2AccountsProductsListResponse.prototype, "listProductsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProductsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProductsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProductsListResponse };
