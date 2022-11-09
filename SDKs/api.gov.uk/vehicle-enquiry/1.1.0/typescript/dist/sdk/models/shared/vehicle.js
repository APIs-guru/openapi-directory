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
export var VehicleMotStatusEnum;
(function (VehicleMotStatusEnum) {
    VehicleMotStatusEnum["NoDetailsHeldByDvla"] = "No details held by DVLA";
    VehicleMotStatusEnum["NoResultsReturned"] = "No results returned";
    VehicleMotStatusEnum["NotValid"] = "Not valid";
    VehicleMotStatusEnum["Valid"] = "Valid";
})(VehicleMotStatusEnum || (VehicleMotStatusEnum = {}));
export var VehicleTaxStatusEnum;
(function (VehicleTaxStatusEnum) {
    VehicleTaxStatusEnum["NotTaxedForOnRoadUse"] = "Not Taxed for on Road Use";
    VehicleTaxStatusEnum["Sorn"] = "SORN";
    VehicleTaxStatusEnum["Taxed"] = "Taxed";
    VehicleTaxStatusEnum["Untaxed"] = "Untaxed";
})(VehicleTaxStatusEnum || (VehicleTaxStatusEnum = {}));
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=artEndDate" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "artEndDate", void 0);
    __decorate([
        Metadata({ data: "json, name=co2Emissions" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "co2Emissions", void 0);
    __decorate([
        Metadata({ data: "json, name=colour" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "colour", void 0);
    __decorate([
        Metadata({ data: "json, name=dateOfLastV5CIssued" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "dateOfLastV5CIssued", void 0);
    __decorate([
        Metadata({ data: "json, name=engineCapacity" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "engineCapacity", void 0);
    __decorate([
        Metadata({ data: "json, name=euroStatus" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "euroStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=fuelType" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "fuelType", void 0);
    __decorate([
        Metadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "make", void 0);
    __decorate([
        Metadata({ data: "json, name=markedForExport" }),
        __metadata("design:type", Boolean)
    ], Vehicle.prototype, "markedForExport", void 0);
    __decorate([
        Metadata({ data: "json, name=monthOfFirstDvlaRegistration" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "monthOfFirstDvlaRegistration", void 0);
    __decorate([
        Metadata({ data: "json, name=monthOfFirstRegistration" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "monthOfFirstRegistration", void 0);
    __decorate([
        Metadata({ data: "json, name=motExpiryDate" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "motExpiryDate", void 0);
    __decorate([
        Metadata({ data: "json, name=motStatus" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "motStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=realDrivingEmissions" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "realDrivingEmissions", void 0);
    __decorate([
        Metadata({ data: "json, name=registrationNumber" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "registrationNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=revenueWeight" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "revenueWeight", void 0);
    __decorate([
        Metadata({ data: "json, name=taxDueDate" }),
        __metadata("design:type", Date)
    ], Vehicle.prototype, "taxDueDate", void 0);
    __decorate([
        Metadata({ data: "json, name=taxStatus" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "taxStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=typeApproval" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "typeApproval", void 0);
    __decorate([
        Metadata({ data: "json, name=wheelplan" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "wheelplan", void 0);
    __decorate([
        Metadata({ data: "json, name=yearOfManufacture" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "yearOfManufacture", void 0);
    return Vehicle;
}(SpeakeasyBase));
export { Vehicle };
