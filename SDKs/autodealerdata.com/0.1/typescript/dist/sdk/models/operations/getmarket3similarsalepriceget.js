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
var GetMarket3SimilarSalePriceGetQueryParams = /** @class */ (function (_super) {
    __extends(GetMarket3SimilarSalePriceGetQueryParams, _super);
    function GetMarket3SimilarSalePriceGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daysBack" }),
        __metadata("design:type", Number)
    ], GetMarket3SimilarSalePriceGetQueryParams.prototype, "daysBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" }),
        __metadata("design:type", String)
    ], GetMarket3SimilarSalePriceGetQueryParams.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" }),
        __metadata("design:type", String)
    ], GetMarket3SimilarSalePriceGetQueryParams.prototype, "regionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sameYear" }),
        __metadata("design:type", Boolean)
    ], GetMarket3SimilarSalePriceGetQueryParams.prototype, "sameYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], GetMarket3SimilarSalePriceGetQueryParams.prototype, "vin", void 0);
    return GetMarket3SimilarSalePriceGetQueryParams;
}(SpeakeasyBase));
export { GetMarket3SimilarSalePriceGetQueryParams };
var GetMarket3SimilarSalePriceGetRequest = /** @class */ (function (_super) {
    __extends(GetMarket3SimilarSalePriceGetRequest, _super);
    function GetMarket3SimilarSalePriceGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarket3SimilarSalePriceGetQueryParams)
    ], GetMarket3SimilarSalePriceGetRequest.prototype, "queryParams", void 0);
    return GetMarket3SimilarSalePriceGetRequest;
}(SpeakeasyBase));
export { GetMarket3SimilarSalePriceGetRequest };
var GetMarket3SimilarSalePriceGetResponse = /** @class */ (function (_super) {
    __extends(GetMarket3SimilarSalePriceGetResponse, _super);
    function GetMarket3SimilarSalePriceGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMarket3SimilarSalePriceGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetMarket3SimilarSalePriceGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SimilarSalePriceResp)
    ], GetMarket3SimilarSalePriceGetResponse.prototype, "similarSalePriceResp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMarket3SimilarSalePriceGetResponse.prototype, "statusCode", void 0);
    return GetMarket3SimilarSalePriceGetResponse;
}(SpeakeasyBase));
export { GetMarket3SimilarSalePriceGetResponse };
