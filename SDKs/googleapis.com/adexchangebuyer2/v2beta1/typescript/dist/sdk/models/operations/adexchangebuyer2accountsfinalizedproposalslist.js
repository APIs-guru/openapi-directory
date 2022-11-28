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
var Adexchangebuyer2AccountsFinalizedProposalsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsListPathParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListPathParams.prototype, "accountId", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsListPathParams };
export var Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;
(function (Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum) {
    Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum["FilterSyntaxUnspecified"] = "FILTER_SYNTAX_UNSPECIFIED";
    Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum["Pql"] = "PQL";
    Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum["ListFilter"] = "LIST_FILTER";
})(Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum || (Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum = {}));
var Adexchangebuyer2AccountsFinalizedProposalsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsListQueryParams, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterSyntax" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "filterSyntax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsListQueryParams };
var Adexchangebuyer2AccountsFinalizedProposalsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsListSecurity, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2AccountsFinalizedProposalsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2AccountsFinalizedProposalsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsListSecurity };
var Adexchangebuyer2AccountsFinalizedProposalsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsListRequest, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsListPathParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsListQueryParams)
    ], Adexchangebuyer2AccountsFinalizedProposalsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2AccountsFinalizedProposalsListSecurity)
    ], Adexchangebuyer2AccountsFinalizedProposalsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsListRequest };
var Adexchangebuyer2AccountsFinalizedProposalsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2AccountsFinalizedProposalsListResponse, _super);
    function Adexchangebuyer2AccountsFinalizedProposalsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2AccountsFinalizedProposalsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProposalsResponse)
    ], Adexchangebuyer2AccountsFinalizedProposalsListResponse.prototype, "listProposalsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2AccountsFinalizedProposalsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2AccountsFinalizedProposalsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2AccountsFinalizedProposalsListResponse };
