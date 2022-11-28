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
export var GetSpecsCarAutoCompleteFieldEnum;
(function (GetSpecsCarAutoCompleteFieldEnum) {
    GetSpecsCarAutoCompleteFieldEnum["Make"] = "make";
    GetSpecsCarAutoCompleteFieldEnum["Model"] = "model";
    GetSpecsCarAutoCompleteFieldEnum["Trim"] = "trim";
    GetSpecsCarAutoCompleteFieldEnum["BodyType"] = "body_type";
    GetSpecsCarAutoCompleteFieldEnum["BodySubtype"] = "body_subtype";
    GetSpecsCarAutoCompleteFieldEnum["VehicleType"] = "vehicle_type";
    GetSpecsCarAutoCompleteFieldEnum["Transmission"] = "transmission";
    GetSpecsCarAutoCompleteFieldEnum["Drivetrain"] = "drivetrain";
    GetSpecsCarAutoCompleteFieldEnum["FuelType"] = "fuel_type";
    GetSpecsCarAutoCompleteFieldEnum["Engine"] = "engine";
    GetSpecsCarAutoCompleteFieldEnum["EngineSize"] = "engine_size";
    GetSpecsCarAutoCompleteFieldEnum["EngineBlock"] = "engine_block";
})(GetSpecsCarAutoCompleteFieldEnum || (GetSpecsCarAutoCompleteFieldEnum = {}));
var GetSpecsCarAutoCompleteQueryParams = /** @class */ (function (_super) {
    __extends(GetSpecsCarAutoCompleteQueryParams, _super);
    function GetSpecsCarAutoCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" }),
        __metadata("design:type", Boolean)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "ignoreCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteQueryParams.prototype, "year", void 0);
    return GetSpecsCarAutoCompleteQueryParams;
}(SpeakeasyBase));
export { GetSpecsCarAutoCompleteQueryParams };
var GetSpecsCarAutoCompleteRequest = /** @class */ (function (_super) {
    __extends(GetSpecsCarAutoCompleteRequest, _super);
    function GetSpecsCarAutoCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpecsCarAutoCompleteQueryParams)
    ], GetSpecsCarAutoCompleteRequest.prototype, "queryParams", void 0);
    return GetSpecsCarAutoCompleteRequest;
}(SpeakeasyBase));
export { GetSpecsCarAutoCompleteRequest };
var GetSpecsCarAutoCompleteResponse = /** @class */ (function (_super) {
    __extends(GetSpecsCarAutoCompleteResponse, _super);
    function GetSpecsCarAutoCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpecsCarAutoCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSpecsCarAutoCompleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SpecsAutoCompleteResponse)
    ], GetSpecsCarAutoCompleteResponse.prototype, "specsAutoCompleteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpecsCarAutoCompleteResponse.prototype, "statusCode", void 0);
    return GetSpecsCarAutoCompleteResponse;
}(SpeakeasyBase));
export { GetSpecsCarAutoCompleteResponse };
