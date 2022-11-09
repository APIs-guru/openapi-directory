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
var GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams = /** @class */ (function (_super) {
    __extends(GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams, _super);
    function GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=jwt" }),
        __metadata("design:type", String)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", String)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=newCars" }),
        __metadata("design:type", Boolean)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "newCars", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=regionName" }),
        __metadata("design:type", String)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "regionName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams.prototype, "startDate", void 0);
    return GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams;
}(SpeakeasyBase));
export { GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams };
var GetListingsByRegionAndDateListingsByRegionAndDateGetRequest = /** @class */ (function (_super) {
    __extends(GetListingsByRegionAndDateListingsByRegionAndDateGetRequest, _super);
    function GetListingsByRegionAndDateListingsByRegionAndDateGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetRequest.prototype, "queryParams", void 0);
    return GetListingsByRegionAndDateListingsByRegionAndDateGetRequest;
}(SpeakeasyBase));
export { GetListingsByRegionAndDateListingsByRegionAndDateGetRequest };
var GetListingsByRegionAndDateListingsByRegionAndDateGetResponse = /** @class */ (function (_super) {
    __extends(GetListingsByRegionAndDateListingsByRegionAndDateGetResponse, _super);
    function GetListingsByRegionAndDateListingsByRegionAndDateGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListingResp)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetResponse.prototype, "listingResp", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListingsByRegionAndDateListingsByRegionAndDateGetResponse.prototype, "statusCode", void 0);
    return GetListingsByRegionAndDateListingsByRegionAndDateGetResponse;
}(SpeakeasyBase));
export { GetListingsByRegionAndDateListingsByRegionAndDateGetResponse };
