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
var Adexchangebuyer2AccountsProposalsAddNotePathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAddNotePathParams, _super);
    function Adexchangebuyer2AccountsProposalsAddNotePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNotePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNotePathParams.prototype, "proposalId", void 0);
    return Adexchangebuyer2AccountsProposalsAddNotePathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAddNotePathParams };
var Adexchangebuyer2AccountsProposalsAddNoteQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAddNoteQueryParams, _super);
    function Adexchangebuyer2AccountsProposalsAddNoteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProposalsAddNoteQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAddNoteQueryParams };
var Adexchangebuyer2AccountsProposalsAddNoteSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAddNoteSecurity, _super);
    function Adexchangebuyer2AccountsProposalsAddNoteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProposalsAddNoteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProposalsAddNoteSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProposalsAddNoteSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAddNoteSecurity };
var Adexchangebuyer2AccountsProposalsAddNoteRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAddNoteRequest, _super);
    function Adexchangebuyer2AccountsProposalsAddNoteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAddNotePathParams)
    ], Adexchangebuyer2AccountsProposalsAddNoteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAddNoteQueryParams)
    ], Adexchangebuyer2AccountsProposalsAddNoteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddNoteRequestInput)
    ], Adexchangebuyer2AccountsProposalsAddNoteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsAddNoteSecurity)
    ], Adexchangebuyer2AccountsProposalsAddNoteRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProposalsAddNoteRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAddNoteRequest };
var Adexchangebuyer2AccountsProposalsAddNoteResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsAddNoteResponse, _super);
    function Adexchangebuyer2AccountsProposalsAddNoteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsAddNoteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Note)
    ], Adexchangebuyer2AccountsProposalsAddNoteResponse.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsAddNoteResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProposalsAddNoteResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsAddNoteResponse };
