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
export var AdexchangebuyerProposalsUpdateUpdateActionEnum;
(function (AdexchangebuyerProposalsUpdateUpdateActionEnum) {
    AdexchangebuyerProposalsUpdateUpdateActionEnum["Accept"] = "accept";
    AdexchangebuyerProposalsUpdateUpdateActionEnum["Cancel"] = "cancel";
    AdexchangebuyerProposalsUpdateUpdateActionEnum["Propose"] = "propose";
    AdexchangebuyerProposalsUpdateUpdateActionEnum["ProposeAndAccept"] = "proposeAndAccept";
    AdexchangebuyerProposalsUpdateUpdateActionEnum["UnknownAction"] = "unknownAction";
    AdexchangebuyerProposalsUpdateUpdateActionEnum["UpdateNonTerms"] = "updateNonTerms";
})(AdexchangebuyerProposalsUpdateUpdateActionEnum || (AdexchangebuyerProposalsUpdateUpdateActionEnum = {}));
var AdexchangebuyerProposalsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsUpdatePathParams, _super);
    function AdexchangebuyerProposalsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdatePathParams.prototype, "proposalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionNumber" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdatePathParams.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=updateAction" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdatePathParams.prototype, "updateAction", void 0);
    return AdexchangebuyerProposalsUpdatePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsUpdatePathParams };
var AdexchangebuyerProposalsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsUpdateQueryParams, _super);
    function AdexchangebuyerProposalsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerProposalsUpdateQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsUpdateQueryParams };
var AdexchangebuyerProposalsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsUpdateSecurity, _super);
    function AdexchangebuyerProposalsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerProposalsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerProposalsUpdateSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerProposalsUpdateSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsUpdateSecurity };
var AdexchangebuyerProposalsUpdateRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsUpdateRequest, _super);
    function AdexchangebuyerProposalsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsUpdatePathParams)
    ], AdexchangebuyerProposalsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsUpdateQueryParams)
    ], AdexchangebuyerProposalsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Proposal)
    ], AdexchangebuyerProposalsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsUpdateSecurity)
    ], AdexchangebuyerProposalsUpdateRequest.prototype, "security", void 0);
    return AdexchangebuyerProposalsUpdateRequest;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsUpdateRequest };
var AdexchangebuyerProposalsUpdateResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsUpdateResponse, _super);
    function AdexchangebuyerProposalsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], AdexchangebuyerProposalsUpdateResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerProposalsUpdateResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerProposalsUpdateResponse;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsUpdateResponse };
