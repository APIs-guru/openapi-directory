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
var Adexchangebuyer2AccountsProposalsPausePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsPausePathParams, _super);
    function Adexchangebuyer2AccountsProposalsPausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPausePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPausePathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsProposalsPausePathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsPausePathParams };
var Adexchangebuyer2AccountsProposalsPauseQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsPauseQueryParams, _super);
    function Adexchangebuyer2AccountsProposalsPauseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProposalsPauseQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsPauseQueryParams };
var Adexchangebuyer2AccountsProposalsPauseSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsPauseSecurity, _super);
    function Adexchangebuyer2AccountsProposalsPauseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProposalsPauseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProposalsPauseSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProposalsPauseSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsPauseSecurity };
var Adexchangebuyer2AccountsProposalsPauseRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsPauseRequest, _super);
    function Adexchangebuyer2AccountsProposalsPauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsPausePathParams)
    ], Adexchangebuyer2AccountsProposalsPauseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsPauseQueryParams)
    ], Adexchangebuyer2AccountsProposalsPauseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PauseProposalRequest)
    ], Adexchangebuyer2AccountsProposalsPauseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsPauseSecurity)
    ], Adexchangebuyer2AccountsProposalsPauseRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProposalsPauseRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsPauseRequest };
var Adexchangebuyer2AccountsProposalsPauseResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsPauseResponse, _super);
    function Adexchangebuyer2AccountsProposalsPauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsPauseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], Adexchangebuyer2AccountsProposalsPauseResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsPauseResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProposalsPauseResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsPauseResponse };
