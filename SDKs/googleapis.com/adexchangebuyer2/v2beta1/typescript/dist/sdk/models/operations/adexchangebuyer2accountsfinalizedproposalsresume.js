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
var Adexchangebuyer2AccountsFinalizedProposalsResumePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsResumePathParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsResumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumePathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsResumePathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsResumePathParams };
var Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams };
var Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity };
var Adexchangebuyer2AccountsFinalizedProposalsResumeRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsResumeRequest, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsResumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsResumePathParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResumeProposalDealsRequest)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsResumeRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsResumeRequest };
var Adexchangebuyer2AccountsFinalizedProposalsResumeResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsResumeResponse, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsResumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsFinalizedProposalsResumeResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsResumeResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsResumeResponse };
