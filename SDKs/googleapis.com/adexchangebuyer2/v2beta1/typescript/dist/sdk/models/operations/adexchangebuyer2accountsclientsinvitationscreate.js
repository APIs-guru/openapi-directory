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
var Adexchangebuyer2AccountsClientsInvitationsCreatePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsCreatePathParams, _super);
    function Adexchangebuyer2AccountsClientsInvitationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientAccountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreatePathParams.prototype, "clientAccountId", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsCreatePathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsCreatePathParams };
var Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams, _super);
    function Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams };
var Adexchangebuyer2AccountsClientsInvitationsCreateSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsCreateSecurity, _super);
    function Adexchangebuyer2AccountsClientsInvitationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsCreateSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsCreateSecurity };
var Adexchangebuyer2AccountsClientsInvitationsCreateRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsCreateRequest, _super);
    function Adexchangebuyer2AccountsClientsInvitationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsCreatePathParams)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClientUserInvitation)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsClientsInvitationsCreateSecurity)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsCreateRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsCreateRequest };
var Adexchangebuyer2AccountsClientsInvitationsCreateResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsClientsInvitationsCreateResponse, _super);
    function Adexchangebuyer2AccountsClientsInvitationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientUserInvitation)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateResponse.prototype, "clientUserInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsClientsInvitationsCreateResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsClientsInvitationsCreateResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsClientsInvitationsCreateResponse };
