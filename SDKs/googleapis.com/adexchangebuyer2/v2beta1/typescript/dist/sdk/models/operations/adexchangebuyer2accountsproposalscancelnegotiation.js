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
var Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams, _super);
    function Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams };
var Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams, _super);
    function Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams };
var Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity, _super);
    function Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity };
var Adexchangebuyer2AccountsProposalsCancelNegotiationRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsCancelNegotiationRequest, _super);
    function Adexchangebuyer2AccountsProposalsCancelNegotiationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsCancelNegotiationPathParams)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsCancelNegotiationQueryParams)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProposalsCancelNegotiationRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsCancelNegotiationRequest };
var Adexchangebuyer2AccountsProposalsCancelNegotiationResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsCancelNegotiationResponse, _super);
    function Adexchangebuyer2AccountsProposalsCancelNegotiationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsCancelNegotiationResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProposalsCancelNegotiationResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsCancelNegotiationResponse };
