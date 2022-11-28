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
var Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creativeId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams.prototype, "creativeId", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams };
var Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams };
var Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity };
var Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddDealAssociationRequest)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest };
var Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse };
