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
var Adexchangebuyer2AccountsProposalsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsListPathParams, _super);
    function Adexchangebuyer2AccountsProposalsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListPathParams.prototype, "accountId", void 0);
    return Adexchangebuyer2AccountsProposalsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsListPathParams };
export var Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum;
(function (Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum) {
    Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum["FilterSyntaxUnspecified"] = "FILTER_SYNTAX_UNSPECIFIED";
    Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum["Pql"] = "PQL";
    Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum["ListFilter"] = "LIST_FILTER";
})(Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum || (Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum = {}));
var Adexchangebuyer2AccountsProposalsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsListQueryParams, _super);
    function Adexchangebuyer2AccountsProposalsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterSyntax" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "filterSyntax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsProposalsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsListQueryParams };
var Adexchangebuyer2AccountsProposalsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsListSecurity, _super);
    function Adexchangebuyer2AccountsProposalsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsProposalsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsProposalsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsProposalsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsListSecurity };
var Adexchangebuyer2AccountsProposalsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsListRequest, _super);
    function Adexchangebuyer2AccountsProposalsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsListPathParams)
    ], Adexchangebuyer2AccountsProposalsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsListQueryParams)
    ], Adexchangebuyer2AccountsProposalsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsProposalsListSecurity)
    ], Adexchangebuyer2AccountsProposalsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsProposalsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsListRequest };
var Adexchangebuyer2AccountsProposalsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsProposalsListResponse, _super);
    function Adexchangebuyer2AccountsProposalsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsProposalsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProposalsResponse)
    ], Adexchangebuyer2AccountsProposalsListResponse.prototype, "listProposalsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsProposalsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsProposalsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsProposalsListResponse };
