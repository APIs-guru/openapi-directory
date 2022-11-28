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
export var GetSearchHeavyEquipmentAutoCompleteFieldEnum;
(function (GetSearchHeavyEquipmentAutoCompleteFieldEnum) {
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Make"] = "make";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Model"] = "model";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Trim"] = "trim";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["BodyType"] = "body_type";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Transmission"] = "transmission";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Drivetrain"] = "drivetrain";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["FuelType"] = "fuel_type";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["ExteriorColor"] = "exterior_color";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["InteriorColor"] = "interior_color";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Engine"] = "engine";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["Category"] = "category";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["SubCategory"] = "sub_category";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["State"] = "state";
    GetSearchHeavyEquipmentAutoCompleteFieldEnum["City"] = "city";
})(GetSearchHeavyEquipmentAutoCompleteFieldEnum || (GetSearchHeavyEquipmentAutoCompleteFieldEnum = {}));
export var GetSearchHeavyEquipmentAutoCompleteSortByEnum;
(function (GetSearchHeavyEquipmentAutoCompleteSortByEnum) {
    GetSearchHeavyEquipmentAutoCompleteSortByEnum["Index"] = "index";
    GetSearchHeavyEquipmentAutoCompleteSortByEnum["Count"] = "count";
})(GetSearchHeavyEquipmentAutoCompleteSortByEnum || (GetSearchHeavyEquipmentAutoCompleteSortByEnum = {}));
var GetSearchHeavyEquipmentAutoCompleteQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchHeavyEquipmentAutoCompleteQueryParams, _super);
    function GetSearchHeavyEquipmentAutoCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" }),
        __metadata("design:type", Boolean)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "ignoreCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_counts" }),
        __metadata("design:type", Boolean)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "termCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteQueryParams.prototype, "year", void 0);
    return GetSearchHeavyEquipmentAutoCompleteQueryParams;
}(SpeakeasyBase));
export { GetSearchHeavyEquipmentAutoCompleteQueryParams };
var GetSearchHeavyEquipmentAutoCompleteRequest = /** @class */ (function (_super) {
    __extends(GetSearchHeavyEquipmentAutoCompleteRequest, _super);
    function GetSearchHeavyEquipmentAutoCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchHeavyEquipmentAutoCompleteQueryParams)
    ], GetSearchHeavyEquipmentAutoCompleteRequest.prototype, "queryParams", void 0);
    return GetSearchHeavyEquipmentAutoCompleteRequest;
}(SpeakeasyBase));
export { GetSearchHeavyEquipmentAutoCompleteRequest };
var GetSearchHeavyEquipmentAutoCompleteResponse = /** @class */ (function (_super) {
    __extends(GetSearchHeavyEquipmentAutoCompleteResponse, _super);
    function GetSearchHeavyEquipmentAutoCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchHeavyEquipmentAutoCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchHeavyEquipmentAutoCompleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAutoCompleteResponse)
    ], GetSearchHeavyEquipmentAutoCompleteResponse.prototype, "searchAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchHeavyEquipmentAutoCompleteResponse.prototype, "statusCode", void 0);
    return GetSearchHeavyEquipmentAutoCompleteResponse;
}(SpeakeasyBase));
export { GetSearchHeavyEquipmentAutoCompleteResponse };
