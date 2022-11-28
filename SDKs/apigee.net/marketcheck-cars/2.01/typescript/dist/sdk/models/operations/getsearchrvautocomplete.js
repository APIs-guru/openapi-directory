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
export var GetSearchRvAutoCompleteFieldEnum;
(function (GetSearchRvAutoCompleteFieldEnum) {
    GetSearchRvAutoCompleteFieldEnum["Make"] = "make";
    GetSearchRvAutoCompleteFieldEnum["Model"] = "model";
    GetSearchRvAutoCompleteFieldEnum["Trim"] = "trim";
    GetSearchRvAutoCompleteFieldEnum["Class"] = "class";
    GetSearchRvAutoCompleteFieldEnum["Transmission"] = "transmission";
    GetSearchRvAutoCompleteFieldEnum["FuelType"] = "fuel_type";
    GetSearchRvAutoCompleteFieldEnum["ExteriorColor"] = "exterior_color";
    GetSearchRvAutoCompleteFieldEnum["InteriorColor"] = "interior_color";
    GetSearchRvAutoCompleteFieldEnum["Engine"] = "engine";
    GetSearchRvAutoCompleteFieldEnum["State"] = "state";
    GetSearchRvAutoCompleteFieldEnum["City"] = "city";
})(GetSearchRvAutoCompleteFieldEnum || (GetSearchRvAutoCompleteFieldEnum = {}));
export var GetSearchRvAutoCompleteSortByEnum;
(function (GetSearchRvAutoCompleteSortByEnum) {
    GetSearchRvAutoCompleteSortByEnum["Index"] = "index";
    GetSearchRvAutoCompleteSortByEnum["Count"] = "count";
})(GetSearchRvAutoCompleteSortByEnum || (GetSearchRvAutoCompleteSortByEnum = {}));
var GetSearchRvAutoCompleteQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchRvAutoCompleteQueryParams, _super);
    function GetSearchRvAutoCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" }),
        __metadata("design:type", Boolean)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "ignoreCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_counts" }),
        __metadata("design:type", Boolean)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "termCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteQueryParams.prototype, "year", void 0);
    return GetSearchRvAutoCompleteQueryParams;
}(SpeakeasyBase));
export { GetSearchRvAutoCompleteQueryParams };
var GetSearchRvAutoCompleteRequest = /** @class */ (function (_super) {
    __extends(GetSearchRvAutoCompleteRequest, _super);
    function GetSearchRvAutoCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchRvAutoCompleteQueryParams)
    ], GetSearchRvAutoCompleteRequest.prototype, "queryParams", void 0);
    return GetSearchRvAutoCompleteRequest;
}(SpeakeasyBase));
export { GetSearchRvAutoCompleteRequest };
var GetSearchRvAutoCompleteResponse = /** @class */ (function (_super) {
    __extends(GetSearchRvAutoCompleteResponse, _super);
    function GetSearchRvAutoCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchRvAutoCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchRvAutoCompleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAutoCompleteResponse)
    ], GetSearchRvAutoCompleteResponse.prototype, "searchAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchRvAutoCompleteResponse.prototype, "statusCode", void 0);
    return GetSearchRvAutoCompleteResponse;
}(SpeakeasyBase));
export { GetSearchRvAutoCompleteResponse };
