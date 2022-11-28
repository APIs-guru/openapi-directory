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
var GetListingCarAuctionIdPathParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdPathParams, _super);
    function GetListingCarAuctionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdPathParams.prototype, "id", void 0);
    return GetListingCarAuctionIdPathParams;
}(SpeakeasyBase));
export { GetListingCarAuctionIdPathParams };
var GetListingCarAuctionIdQueryParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdQueryParams, _super);
    function GetListingCarAuctionIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], GetListingCarAuctionIdQueryParams.prototype, "appendApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" }),
        __metadata("design:type", Boolean)
    ], GetListingCarAuctionIdQueryParams.prototype, "includeRelevantLinks", void 0);
    return GetListingCarAuctionIdQueryParams;
}(SpeakeasyBase));
export { GetListingCarAuctionIdQueryParams };
var GetListingCarAuctionIdRequest = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdRequest, _super);
    function GetListingCarAuctionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarAuctionIdPathParams)
    ], GetListingCarAuctionIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingCarAuctionIdQueryParams)
    ], GetListingCarAuctionIdRequest.prototype, "queryParams", void 0);
    return GetListingCarAuctionIdRequest;
}(SpeakeasyBase));
export { GetListingCarAuctionIdRequest };
var GetListingCarAuctionIdResponse = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdResponse, _super);
    function GetListingCarAuctionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetListingCarAuctionIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Listing)
    ], GetListingCarAuctionIdResponse.prototype, "listing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingCarAuctionIdResponse.prototype, "statusCode", void 0);
    return GetListingCarAuctionIdResponse;
}(SpeakeasyBase));
export { GetListingCarAuctionIdResponse };
