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
var Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams };
var Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams };
var Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity };
var Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest };
var Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLosingBidsResponse)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse.prototype, "listLosingBidsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse };
