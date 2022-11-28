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
var Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creativeId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams.prototype, "creativeId", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams };
var Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams };
var Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity };
var Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveDealAssociationRequest)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest };
var Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse, _super);
    function Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse };
