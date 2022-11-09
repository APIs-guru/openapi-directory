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
var ListingsByZipCodeListingsByZipCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ListingsByZipCodeListingsByZipCodeGetQueryParams, _super);
    function ListingsByZipCodeListingsByZipCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=jwt" }),
        __metadata("design:type", String)
    ], ListingsByZipCodeListingsByZipCodeGetQueryParams.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", String)
    ], ListingsByZipCodeListingsByZipCodeGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=newCars" }),
        __metadata("design:type", Boolean)
    ], ListingsByZipCodeListingsByZipCodeGetQueryParams.prototype, "newCars", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListingsByZipCodeListingsByZipCodeGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=zipCode" }),
        __metadata("design:type", Number)
    ], ListingsByZipCodeListingsByZipCodeGetQueryParams.prototype, "zipCode", void 0);
    return ListingsByZipCodeListingsByZipCodeGetQueryParams;
}(SpeakeasyBase));
export { ListingsByZipCodeListingsByZipCodeGetQueryParams };
var ListingsByZipCodeListingsByZipCodeGetRequest = /** @class */ (function (_super) {
    __extends(ListingsByZipCodeListingsByZipCodeGetRequest, _super);
    function ListingsByZipCodeListingsByZipCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListingsByZipCodeListingsByZipCodeGetQueryParams)
    ], ListingsByZipCodeListingsByZipCodeGetRequest.prototype, "queryParams", void 0);
    return ListingsByZipCodeListingsByZipCodeGetRequest;
}(SpeakeasyBase));
export { ListingsByZipCodeListingsByZipCodeGetRequest };
var ListingsByZipCodeListingsByZipCodeGetResponse = /** @class */ (function (_super) {
    __extends(ListingsByZipCodeListingsByZipCodeGetResponse, _super);
    function ListingsByZipCodeListingsByZipCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListingsByZipCodeListingsByZipCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], ListingsByZipCodeListingsByZipCodeGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListingResp)
    ], ListingsByZipCodeListingsByZipCodeGetResponse.prototype, "listingResp", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListingsByZipCodeListingsByZipCodeGetResponse.prototype, "statusCode", void 0);
    return ListingsByZipCodeListingsByZipCodeGetResponse;
}(SpeakeasyBase));
export { ListingsByZipCodeListingsByZipCodeGetResponse };
