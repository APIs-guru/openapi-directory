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
export var AutoCompleteFieldEnum;
(function (AutoCompleteFieldEnum) {
    AutoCompleteFieldEnum["Ymm"] = "ymm";
    AutoCompleteFieldEnum["Mm"] = "mm";
    AutoCompleteFieldEnum["Make"] = "make";
    AutoCompleteFieldEnum["Model"] = "model";
    AutoCompleteFieldEnum["Trim"] = "trim";
    AutoCompleteFieldEnum["BodyType"] = "body_type";
    AutoCompleteFieldEnum["BodySubtype"] = "body_subtype";
    AutoCompleteFieldEnum["VehicleType"] = "vehicle_type";
    AutoCompleteFieldEnum["Transmission"] = "transmission";
    AutoCompleteFieldEnum["Drivetrain"] = "drivetrain";
    AutoCompleteFieldEnum["FuelType"] = "fuel_type";
    AutoCompleteFieldEnum["ExteriorColor"] = "exterior_color";
    AutoCompleteFieldEnum["InteriorColor"] = "interior_color";
    AutoCompleteFieldEnum["Engine"] = "engine";
    AutoCompleteFieldEnum["EngineSize"] = "engine_size";
    AutoCompleteFieldEnum["EngineBlock"] = "engine_block";
    AutoCompleteFieldEnum["State"] = "state";
    AutoCompleteFieldEnum["City"] = "city";
})(AutoCompleteFieldEnum || (AutoCompleteFieldEnum = {}));
export var AutoCompleteIncludeNonVinListingsEnum;
(function (AutoCompleteIncludeNonVinListingsEnum) {
    AutoCompleteIncludeNonVinListingsEnum["True"] = "true";
    AutoCompleteIncludeNonVinListingsEnum["False"] = "false";
})(AutoCompleteIncludeNonVinListingsEnum || (AutoCompleteIncludeNonVinListingsEnum = {}));
export var AutoCompleteSortByEnum;
(function (AutoCompleteSortByEnum) {
    AutoCompleteSortByEnum["Index"] = "index";
    AutoCompleteSortByEnum["Count"] = "count";
})(AutoCompleteSortByEnum || (AutoCompleteSortByEnum = {}));
var AutoCompleteQueryParams = /** @class */ (function (_super) {
    __extends(AutoCompleteQueryParams, _super);
    function AutoCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "exteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" }),
        __metadata("design:type", Boolean)
    ], AutoCompleteQueryParams.prototype, "ignoreCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "includeNonVinListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "interiorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_counts" }),
        __metadata("design:type", Boolean)
    ], AutoCompleteQueryParams.prototype, "termCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], AutoCompleteQueryParams.prototype, "year", void 0);
    return AutoCompleteQueryParams;
}(SpeakeasyBase));
export { AutoCompleteQueryParams };
var AutoCompleteRequest = /** @class */ (function (_super) {
    __extends(AutoCompleteRequest, _super);
    function AutoCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutoCompleteQueryParams)
    ], AutoCompleteRequest.prototype, "queryParams", void 0);
    return AutoCompleteRequest;
}(SpeakeasyBase));
export { AutoCompleteRequest };
var AutoCompleteResponse = /** @class */ (function (_super) {
    __extends(AutoCompleteResponse, _super);
    function AutoCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AutoCompleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAutoCompleteResponse)
    ], AutoCompleteResponse.prototype, "searchAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoCompleteResponse.prototype, "statusCode", void 0);
    return AutoCompleteResponse;
}(SpeakeasyBase));
export { AutoCompleteResponse };
