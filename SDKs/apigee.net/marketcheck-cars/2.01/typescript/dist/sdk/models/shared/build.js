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
// Build
/**
 * Describes the Car specification
**/
var Build = /** @class */ (function (_super) {
    __extends(Build, _super);
    function Build() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antibrake_sys" }),
        __metadata("design:type", String)
    ], Build.prototype, "antibrakeSys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_subtype" }),
        __metadata("design:type", String)
    ], Build.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_type" }),
        __metadata("design:type", String)
    ], Build.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city_miles" }),
        __metadata("design:type", String)
    ], Build.prototype, "cityMiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cylinders" }),
        __metadata("design:type", Number)
    ], Build.prototype, "cylinders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doors" }),
        __metadata("design:type", Number)
    ], Build.prototype, "doors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drivetrain" }),
        __metadata("design:type", String)
    ], Build.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], Build.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine_aspiration" }),
        __metadata("design:type", String)
    ], Build.prototype, "engineAspiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine_block" }),
        __metadata("design:type", String)
    ], Build.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine_measure" }),
        __metadata("design:type", String)
    ], Build.prototype, "engineMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine_size" }),
        __metadata("design:type", Number)
    ], Build.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fuel_type" }),
        __metadata("design:type", String)
    ], Build.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highway_miles" }),
        __metadata("design:type", String)
    ], Build.prototype, "highwayMiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=made_in" }),
        __metadata("design:type", String)
    ], Build.prototype, "madeIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], Build.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Build.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_seating" }),
        __metadata("design:type", String)
    ], Build.prototype, "optSeating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overall_height" }),
        __metadata("design:type", String)
    ], Build.prototype, "overallHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overall_length" }),
        __metadata("design:type", String)
    ], Build.prototype, "overallLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overall_width" }),
        __metadata("design:type", String)
    ], Build.prototype, "overallWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=short_trim" }),
        __metadata("design:type", String)
    ], Build.prototype, "shortTrim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=std_seating" }),
        __metadata("design:type", String)
    ], Build.prototype, "stdSeating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steering_type" }),
        __metadata("design:type", String)
    ], Build.prototype, "steeringType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tank_size" }),
        __metadata("design:type", String)
    ], Build.prototype, "tankSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmission" }),
        __metadata("design:type", String)
    ], Build.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trim" }),
        __metadata("design:type", String)
    ], Build.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trim_r" }),
        __metadata("design:type", String)
    ], Build.prototype, "trimR", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle_type" }),
        __metadata("design:type", String)
    ], Build.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Build.prototype, "year", void 0);
    return Build;
}(SpeakeasyBase));
export { Build };
