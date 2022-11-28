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
var GetEventItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventItemsQueryParams, _super);
    function GetEventItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_ids" }),
        __metadata("design:type", String)
    ], GetEventItemsQueryParams.prototype, "categoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivery_country" }),
        __metadata("design:type", String)
    ], GetEventItemsQueryParams.prototype, "deliveryCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_ids" }),
        __metadata("design:type", String)
    ], GetEventItemsQueryParams.prototype, "eventIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetEventItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetEventItemsQueryParams.prototype, "offset", void 0);
    return GetEventItemsQueryParams;
}(SpeakeasyBase));
export { GetEventItemsQueryParams };
var GetEventItemsHeaders = /** @class */ (function (_super) {
    __extends(GetEventItemsHeaders, _super);
    function GetEventItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetEventItemsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetEventItemsHeaders;
}(SpeakeasyBase));
export { GetEventItemsHeaders };
var GetEventItemsSecurity = /** @class */ (function (_super) {
    __extends(GetEventItemsSecurity, _super);
    function GetEventItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetEventItemsSecurity.prototype, "apiAuth", void 0);
    return GetEventItemsSecurity;
}(SpeakeasyBase));
export { GetEventItemsSecurity };
var GetEventItemsRequest = /** @class */ (function (_super) {
    __extends(GetEventItemsRequest, _super);
    function GetEventItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventItemsQueryParams)
    ], GetEventItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventItemsHeaders)
    ], GetEventItemsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventItemsSecurity)
    ], GetEventItemsRequest.prototype, "security", void 0);
    return GetEventItemsRequest;
}(SpeakeasyBase));
export { GetEventItemsRequest };
var GetEventItemsResponse = /** @class */ (function (_super) {
    __extends(GetEventItemsResponse, _super);
    function GetEventItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventItemSearchResponse)
    ], GetEventItemsResponse.prototype, "eventItemSearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventItemsResponse.prototype, "statusCode", void 0);
    return GetEventItemsResponse;
}(SpeakeasyBase));
export { GetEventItemsResponse };
