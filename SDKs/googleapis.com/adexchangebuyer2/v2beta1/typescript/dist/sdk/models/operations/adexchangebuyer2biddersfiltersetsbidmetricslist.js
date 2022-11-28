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
var Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filterSetName" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams.prototype, "filterSetName", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams };
var Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams, _super);
    function Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams.prototype, "uploadProtocol", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams };
var Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity, _super);
    function Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity.prototype, "oauth2c", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity };
var Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest, _super);
    function Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest.prototype, "security", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest };
var Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse = /** @class */ (function (_super) {
    __extends(Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse, _super);
    function Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBidMetricsResponse)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse.prototype, "listBidMetricsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse.prototype, "statusCode", void 0);
    return Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse;
}(SpeakeasyBase));
export { Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse };
