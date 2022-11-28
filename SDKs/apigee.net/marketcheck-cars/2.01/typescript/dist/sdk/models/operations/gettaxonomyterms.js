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
var GetTaxonomyTermsQueryParams = /** @class */ (function (_super) {
    __extends(GetTaxonomyTermsQueryParams, _super);
    function GetTaxonomyTermsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetTaxonomyTermsQueryParams.prototype, "year", void 0);
    return GetTaxonomyTermsQueryParams;
}(SpeakeasyBase));
export { GetTaxonomyTermsQueryParams };
var GetTaxonomyTermsRequest = /** @class */ (function (_super) {
    __extends(GetTaxonomyTermsRequest, _super);
    function GetTaxonomyTermsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaxonomyTermsQueryParams)
    ], GetTaxonomyTermsRequest.prototype, "queryParams", void 0);
    return GetTaxonomyTermsRequest;
}(SpeakeasyBase));
export { GetTaxonomyTermsRequest };
var GetTaxonomyTermsResponse = /** @class */ (function (_super) {
    __extends(GetTaxonomyTermsResponse, _super);
    function GetTaxonomyTermsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaxonomyTermsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetTaxonomyTermsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SpecsAutoCompleteResponse)
    ], GetTaxonomyTermsResponse.prototype, "specsAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaxonomyTermsResponse.prototype, "statusCode", void 0);
    return GetTaxonomyTermsResponse;
}(SpeakeasyBase));
export { GetTaxonomyTermsResponse };
