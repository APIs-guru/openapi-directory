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
var Adexchangebuyer2AccountsClientsInvitationsGetPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsGetPathParams, _super);
    function Adexchangebuyer2AccountsClientsInvitationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientAccountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetPathParams.prototype, "clientAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitationId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetPathParams.prototype, "invitationId", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsGetPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsGetPathParams };
var Adexchangebuyer2AccountsClientsInvitationsGetQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsGetQueryParams, _super);
    function Adexchangebuyer2AccountsClientsInvitationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsGetQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsGetQueryParams };
var Adexchangebuyer2AccountsClientsInvitationsGetSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsGetSecurity, _super);
    function Adexchangebuyer2AccountsClientsInvitationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsClientsInvitationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsClientsInvitationsGetSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsGetSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsGetSecurity };
var Adexchangebuyer2AccountsClientsInvitationsGetRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsGetRequest, _super);
    function Adexchangebuyer2AccountsClientsInvitationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsGetPathParams)
    ], Adexchangebuyer2AccountsClientsInvitationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsGetQueryParams)
    ], Adexchangebuyer2AccountsClientsInvitationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsGetSecurity)
    ], Adexchangebuyer2AccountsClientsInvitationsGetRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsGetRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsGetRequest };
var Adexchangebuyer2AccountsClientsInvitationsGetResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsGetResponse, _super);
    function Adexchangebuyer2AccountsClientsInvitationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientUserInvitation)
    ], Adexchangebuyer2AccountsClientsInvitationsGetResponse.prototype, "clientUserInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsClientsInvitationsGetResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsGetResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsGetResponse };
