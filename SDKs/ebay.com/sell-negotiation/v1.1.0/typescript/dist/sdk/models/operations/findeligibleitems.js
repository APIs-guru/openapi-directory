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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FindEligibleItemsQueryParams = /** @class */ (function (_super) {
    __extends(FindEligibleItemsQueryParams, _super);
    function FindEligibleItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], FindEligibleItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], FindEligibleItemsQueryParams.prototype, "offset", void 0);
    return FindEligibleItemsQueryParams;
}(SpeakeasyBase));
export { FindEligibleItemsQueryParams };
var FindEligibleItemsHeaders = /** @class */ (function (_super) {
    __extends(FindEligibleItemsHeaders, _super);
    function FindEligibleItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], FindEligibleItemsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return FindEligibleItemsHeaders;
}(SpeakeasyBase));
export { FindEligibleItemsHeaders };
var FindEligibleItemsSecurity = /** @class */ (function (_super) {
    __extends(FindEligibleItemsSecurity, _super);
    function FindEligibleItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], FindEligibleItemsSecurity.prototype, "apiAuth", void 0);
    return FindEligibleItemsSecurity;
}(SpeakeasyBase));
export { FindEligibleItemsSecurity };
var FindEligibleItemsRequest = /** @class */ (function (_super) {
    __extends(FindEligibleItemsRequest, _super);
    function FindEligibleItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindEligibleItemsQueryParams)
    ], FindEligibleItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindEligibleItemsHeaders)
    ], FindEligibleItemsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindEligibleItemsSecurity)
    ], FindEligibleItemsRequest.prototype, "security", void 0);
    return FindEligibleItemsRequest;
}(SpeakeasyBase));
export { FindEligibleItemsRequest };
var FindEligibleItemsResponse = /** @class */ (function (_super) {
    __extends(FindEligibleItemsResponse, _super);
    function FindEligibleItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindEligibleItemsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PagedEligibleItemCollection)
    ], FindEligibleItemsResponse.prototype, "pagedEligibleItemCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindEligibleItemsResponse.prototype, "statusCode", void 0);
    return FindEligibleItemsResponse;
}(SpeakeasyBase));
export { FindEligibleItemsResponse };
