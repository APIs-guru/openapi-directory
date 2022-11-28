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
var Adexchangebuyer2AccountsClientsUsersGetPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsUsersGetPathParams, _super);
    function Adexchangebuyer2AccountsClientsUsersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientAccountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetPathParams.prototype, "clientAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetPathParams.prototype, "userId", void 0);
    return Adexchangebuyer2AccountsClientsUsersGetPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsUsersGetPathParams };
var Adexchangebuyer2AccountsClientsUsersGetQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsUsersGetQueryParams, _super);
    function Adexchangebuyer2AccountsClientsUsersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsClientsUsersGetQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsUsersGetQueryParams };
var Adexchangebuyer2AccountsClientsUsersGetSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsUsersGetSecurity, _super);
    function Adexchangebuyer2AccountsClientsUsersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsClientsUsersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsClientsUsersGetSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsClientsUsersGetSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsUsersGetSecurity };
var Adexchangebuyer2AccountsClientsUsersGetRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsUsersGetRequest, _super);
    function Adexchangebuyer2AccountsClientsUsersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsUsersGetPathParams)
    ], Adexchangebuyer2AccountsClientsUsersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsUsersGetQueryParams)
    ], Adexchangebuyer2AccountsClientsUsersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsUsersGetSecurity)
    ], Adexchangebuyer2AccountsClientsUsersGetRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsClientsUsersGetRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsUsersGetRequest };
var Adexchangebuyer2AccountsClientsUsersGetResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsUsersGetResponse, _super);
    function Adexchangebuyer2AccountsClientsUsersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientUser)
    ], Adexchangebuyer2AccountsClientsUsersGetResponse.prototype, "clientUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsUsersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsClientsUsersGetResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsClientsUsersGetResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsUsersGetResponse };
