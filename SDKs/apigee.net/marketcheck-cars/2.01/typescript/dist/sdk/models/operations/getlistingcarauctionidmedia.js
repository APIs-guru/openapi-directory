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
var GetListingCarAuctionIdMediaPathParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaPathParams, _super);
    function GetListingCarAuctionIdMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaPathParams.prototype, "id", void 0);
    return GetListingCarAuctionIdMediaPathParams;
}(SpeakeasyBase));
export { GetListingCarAuctionIdMediaPathParams };
var GetListingCarAuctionIdMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaQueryParams, _super);
    function GetListingCarAuctionIdMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], GetListingCarAuctionIdMediaQueryParams.prototype, "appendApiKey", void 0);
    return GetListingCarAuctionIdMediaQueryParams;
}(SpeakeasyBase));
export { GetListingCarAuctionIdMediaQueryParams };
var GetListingCarAuctionIdMediaRequest = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaRequest, _super);
    function GetListingCarAuctionIdMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarAuctionIdMediaPathParams)
    ], GetListingCarAuctionIdMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarAuctionIdMediaQueryParams)
    ], GetListingCarAuctionIdMediaRequest.prototype, "queryParams", void 0);
    return GetListingCarAuctionIdMediaRequest;
}(SpeakeasyBase));
export { GetListingCarAuctionIdMediaRequest };
var GetListingCarAuctionIdMediaResponse = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaResponse, _super);
    function GetListingCarAuctionIdMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetListingCarAuctionIdMediaResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListingMedia)
    ], GetListingCarAuctionIdMediaResponse.prototype, "listingMedia", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingCarAuctionIdMediaResponse.prototype, "statusCode", void 0);
    return GetListingCarAuctionIdMediaResponse;
}(SpeakeasyBase));
export { GetListingCarAuctionIdMediaResponse };
