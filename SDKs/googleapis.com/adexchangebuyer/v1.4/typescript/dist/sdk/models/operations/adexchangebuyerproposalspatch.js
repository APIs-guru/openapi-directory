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
export var AdexchangebuyerProposalsPatchUpdateActionEnum;
(function (AdexchangebuyerProposalsPatchUpdateActionEnum) {
    AdexchangebuyerProposalsPatchUpdateActionEnum["Accept"] = "accept";
    AdexchangebuyerProposalsPatchUpdateActionEnum["Cancel"] = "cancel";
    AdexchangebuyerProposalsPatchUpdateActionEnum["Propose"] = "propose";
    AdexchangebuyerProposalsPatchUpdateActionEnum["ProposeAndAccept"] = "proposeAndAccept";
    AdexchangebuyerProposalsPatchUpdateActionEnum["UnknownAction"] = "unknownAction";
    AdexchangebuyerProposalsPatchUpdateActionEnum["UpdateNonTerms"] = "updateNonTerms";
})(AdexchangebuyerProposalsPatchUpdateActionEnum || (AdexchangebuyerProposalsPatchUpdateActionEnum = {}));
var AdexchangebuyerProposalsPatchPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsPatchPathParams, _super);
    function AdexchangebuyerProposalsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchPathParams.prototype, "proposalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionNumber" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchPathParams.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=updateAction" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchPathParams.prototype, "updateAction", void 0);
    return AdexchangebuyerProposalsPatchPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsPatchPathParams };
var AdexchangebuyerProposalsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsPatchQueryParams, _super);
    function AdexchangebuyerProposalsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerProposalsPatchQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsPatchQueryParams };
var AdexchangebuyerProposalsPatchSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsPatchSecurity, _super);
    function AdexchangebuyerProposalsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerProposalsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerProposalsPatchSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerProposalsPatchSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsPatchSecurity };
var AdexchangebuyerProposalsPatchRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsPatchRequest, _super);
    function AdexchangebuyerProposalsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsPatchPathParams)
    ], AdexchangebuyerProposalsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsPatchQueryParams)
    ], AdexchangebuyerProposalsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Proposal)
    ], AdexchangebuyerProposalsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsPatchSecurity)
    ], AdexchangebuyerProposalsPatchRequest.prototype, "security", void 0);
    return AdexchangebuyerProposalsPatchRequest;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsPatchRequest };
var AdexchangebuyerProposalsPatchResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsPatchResponse, _super);
    function AdexchangebuyerProposalsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], AdexchangebuyerProposalsPatchResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerProposalsPatchResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerProposalsPatchResponse;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsPatchResponse };
