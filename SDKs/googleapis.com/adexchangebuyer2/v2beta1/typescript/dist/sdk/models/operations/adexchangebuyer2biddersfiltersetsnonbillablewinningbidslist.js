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
var Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams };
var Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams };
var Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity };
var Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest };
var Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNonBillableWinningBidsResponse)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse.prototype, "listNonBillableWinningBidsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse };
