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
var Adexchangebuyer2AccountsProposalsAcceptPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAcceptPathParams, _super);
    function Adexchangebuyer2AccountsProposalsAcceptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptPathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsProposalsAcceptPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAcceptPathParams };
var Adexchangebuyer2AccountsProposalsAcceptQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAcceptQueryParams, _super);
    function Adexchangebuyer2AccountsProposalsAcceptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProposalsAcceptQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAcceptQueryParams };
var Adexchangebuyer2AccountsProposalsAcceptSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAcceptSecurity, _super);
    function Adexchangebuyer2AccountsProposalsAcceptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProposalsAcceptSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProposalsAcceptSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProposalsAcceptSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAcceptSecurity };
var Adexchangebuyer2AccountsProposalsAcceptRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAcceptRequest, _super);
    function Adexchangebuyer2AccountsProposalsAcceptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAcceptPathParams)
    ], Adexchangebuyer2AccountsProposalsAcceptRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAcceptQueryParams)
    ], Adexchangebuyer2AccountsProposalsAcceptRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcceptProposalRequest)
    ], Adexchangebuyer2AccountsProposalsAcceptRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAcceptSecurity)
    ], Adexchangebuyer2AccountsProposalsAcceptRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProposalsAcceptRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAcceptRequest };
var Adexchangebuyer2AccountsProposalsAcceptResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAcceptResponse, _super);
    function Adexchangebuyer2AccountsProposalsAcceptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAcceptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], Adexchangebuyer2AccountsProposalsAcceptResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsAcceptResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProposalsAcceptResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAcceptResponse };
