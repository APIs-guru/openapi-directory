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
var GetListingsByRegionListingsByRegionGetQueryParams = /** @class */ (function (_super) {
    __extends(GetListingsByRegionListingsByRegionGetQueryParams, _super);
    function GetListingsByRegionListingsByRegionGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=daysBack" }),
        __metadata("design:type", Number)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "daysBack", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=jwt" }),
        __metadata("design:type", String)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", String)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=newCars" }),
        __metadata("design:type", Boolean)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "newCars", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=regionName" }),
        __metadata("design:type", String)
    ], GetListingsByRegionListingsByRegionGetQueryParams.prototype, "regionName", void 0);
    return GetListingsByRegionListingsByRegionGetQueryParams;
}(SpeakeasyBase));
export { GetListingsByRegionListingsByRegionGetQueryParams };
var GetListingsByRegionListingsByRegionGetRequest = /** @class */ (function (_super) {
    __extends(GetListingsByRegionListingsByRegionGetRequest, _super);
    function GetListingsByRegionListingsByRegionGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingsByRegionListingsByRegionGetQueryParams)
    ], GetListingsByRegionListingsByRegionGetRequest.prototype, "queryParams", void 0);
    return GetListingsByRegionListingsByRegionGetRequest;
}(SpeakeasyBase));
export { GetListingsByRegionListingsByRegionGetRequest };
var GetListingsByRegionListingsByRegionGetResponse = /** @class */ (function (_super) {
    __extends(GetListingsByRegionListingsByRegionGetResponse, _super);
    function GetListingsByRegionListingsByRegionGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListingsByRegionListingsByRegionGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetListingsByRegionListingsByRegionGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListingResp)
    ], GetListingsByRegionListingsByRegionGetResponse.prototype, "listingResp", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListingsByRegionListingsByRegionGetResponse.prototype, "statusCode", void 0);
    return GetListingsByRegionListingsByRegionGetResponse;
}(SpeakeasyBase));
export { GetListingsByRegionListingsByRegionGetResponse };
