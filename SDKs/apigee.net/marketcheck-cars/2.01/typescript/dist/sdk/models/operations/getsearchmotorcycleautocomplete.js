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
export var GetSearchMotorcycleAutoCompleteFieldEnum;
(function (GetSearchMotorcycleAutoCompleteFieldEnum) {
    GetSearchMotorcycleAutoCompleteFieldEnum["Make"] = "make";
    GetSearchMotorcycleAutoCompleteFieldEnum["Model"] = "model";
    GetSearchMotorcycleAutoCompleteFieldEnum["Trim"] = "trim";
    GetSearchMotorcycleAutoCompleteFieldEnum["BodyType"] = "body_type";
    GetSearchMotorcycleAutoCompleteFieldEnum["VehicleType"] = "vehicle_type";
    GetSearchMotorcycleAutoCompleteFieldEnum["Transmission"] = "transmission";
    GetSearchMotorcycleAutoCompleteFieldEnum["Drivetrain"] = "drivetrain";
    GetSearchMotorcycleAutoCompleteFieldEnum["FuelType"] = "fuel_type";
    GetSearchMotorcycleAutoCompleteFieldEnum["Color"] = "color";
    GetSearchMotorcycleAutoCompleteFieldEnum["Engine"] = "engine";
    GetSearchMotorcycleAutoCompleteFieldEnum["State"] = "state";
    GetSearchMotorcycleAutoCompleteFieldEnum["City"] = "city";
})(GetSearchMotorcycleAutoCompleteFieldEnum || (GetSearchMotorcycleAutoCompleteFieldEnum = {}));
export var GetSearchMotorcycleAutoCompleteSortByEnum;
(function (GetSearchMotorcycleAutoCompleteSortByEnum) {
    GetSearchMotorcycleAutoCompleteSortByEnum["Index"] = "index";
    GetSearchMotorcycleAutoCompleteSortByEnum["Count"] = "count";
})(GetSearchMotorcycleAutoCompleteSortByEnum || (GetSearchMotorcycleAutoCompleteSortByEnum = {}));
var GetSearchMotorcycleAutoCompleteQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleAutoCompleteQueryParams, _super);
    function GetSearchMotorcycleAutoCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" }),
        __metadata("design:type", Boolean)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "ignoreCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_counts" }),
        __metadata("design:type", Boolean)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "termCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteQueryParams.prototype, "year", void 0);
    return GetSearchMotorcycleAutoCompleteQueryParams;
}(SpeakeasyBase));
export { GetSearchMotorcycleAutoCompleteQueryParams };
var GetSearchMotorcycleAutoCompleteRequest = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleAutoCompleteRequest, _super);
    function GetSearchMotorcycleAutoCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchMotorcycleAutoCompleteQueryParams)
    ], GetSearchMotorcycleAutoCompleteRequest.prototype, "queryParams", void 0);
    return GetSearchMotorcycleAutoCompleteRequest;
}(SpeakeasyBase));
export { GetSearchMotorcycleAutoCompleteRequest };
var GetSearchMotorcycleAutoCompleteResponse = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleAutoCompleteResponse, _super);
    function GetSearchMotorcycleAutoCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchMotorcycleAutoCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchMotorcycleAutoCompleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAutoCompleteResponse)
    ], GetSearchMotorcycleAutoCompleteResponse.prototype, "searchAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleAutoCompleteResponse.prototype, "statusCode", void 0);
    return GetSearchMotorcycleAutoCompleteResponse;
}(SpeakeasyBase));
export { GetSearchMotorcycleAutoCompleteResponse };
