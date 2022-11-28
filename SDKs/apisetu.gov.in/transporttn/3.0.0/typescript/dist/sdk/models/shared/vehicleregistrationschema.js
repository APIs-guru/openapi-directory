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
var VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance, _super);
    function VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance.prototype, "policyNo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance.prototype, "validTill", void 0);
    return VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance };
var VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle, _super);
    function VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "chasisNo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "class", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "cubicCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "cylinder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "engineNo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "fitTill", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "fuelDesc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "mfgDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "seatCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "sleeperCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "standingCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "unladenWeight", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle.prototype, "wheelbase", void 0);
    return VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle };
var VehicleRegistrationSchemaCertificateDataVehicleRegistration = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaCertificateDataVehicleRegistration, _super);
    function VehicleRegistrationSchemaCertificateDataVehicleRegistration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistration.prototype, "insurance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistration.prototype, "vehicle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistration.prototype, "financer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistration.prototype, "normsDesc", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaCertificateDataVehicleRegistration.prototype, "statusDate", void 0);
    return VehicleRegistrationSchemaCertificateDataVehicleRegistration;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaCertificateDataVehicleRegistration };
var VehicleRegistrationSchemaCertificateData = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaCertificateData, _super);
    function VehicleRegistrationSchemaCertificateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaCertificateDataVehicleRegistration)
    ], VehicleRegistrationSchemaCertificateData.prototype, "vehicleRegistration", void 0);
    return VehicleRegistrationSchemaCertificateData;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaCertificateData };
var VehicleRegistrationSchemaIssuedByOrganizationAddress = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedByOrganizationAddress, _super);
    function VehicleRegistrationSchemaIssuedByOrganizationAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganizationAddress.prototype, "vtc", void 0);
    return VehicleRegistrationSchemaIssuedByOrganizationAddress;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedByOrganizationAddress };
var VehicleRegistrationSchemaIssuedByOrganization = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedByOrganization, _super);
    function VehicleRegistrationSchemaIssuedByOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedByOrganizationAddress)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "tin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedByOrganization.prototype, "uid", void 0);
    return VehicleRegistrationSchemaIssuedByOrganization;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedByOrganization };
var VehicleRegistrationSchemaIssuedBy = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedBy, _super);
    function VehicleRegistrationSchemaIssuedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedByOrganization)
    ], VehicleRegistrationSchemaIssuedBy.prototype, "organization", void 0);
    return VehicleRegistrationSchemaIssuedBy;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedBy };
var VehicleRegistrationSchemaIssuedToPersonAddress = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedToPersonAddress, _super);
    function VehicleRegistrationSchemaIssuedToPersonAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonAddress.prototype, "vtc", void 0);
    return VehicleRegistrationSchemaIssuedToPersonAddress;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedToPersonAddress };
var VehicleRegistrationSchemaIssuedToPersonPhoto = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedToPersonPhoto, _super);
    function VehicleRegistrationSchemaIssuedToPersonPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPersonPhoto.prototype, "format", void 0);
    return VehicleRegistrationSchemaIssuedToPersonPhoto;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedToPersonPhoto };
var VehicleRegistrationSchemaIssuedToPerson = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedToPerson, _super);
    function VehicleRegistrationSchemaIssuedToPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedToPersonAddress)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedToPersonPhoto)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "religion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "swd", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "swdIndicator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchemaIssuedToPerson.prototype, "uid", void 0);
    return VehicleRegistrationSchemaIssuedToPerson;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedToPerson };
var VehicleRegistrationSchemaIssuedTo = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchemaIssuedTo, _super);
    function VehicleRegistrationSchemaIssuedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedToPerson)
    ], VehicleRegistrationSchemaIssuedTo.prototype, "person", void 0);
    return VehicleRegistrationSchemaIssuedTo;
}(SpeakeasyBase));
export { VehicleRegistrationSchemaIssuedTo };
var VehicleRegistrationSchema = /** @class */ (function (_super) {
    __extends(VehicleRegistrationSchema, _super);
    function VehicleRegistrationSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaCertificateData)
    ], VehicleRegistrationSchema.prototype, "certificateData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedBy)
    ], VehicleRegistrationSchema.prototype, "issuedBy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VehicleRegistrationSchemaIssuedTo)
    ], VehicleRegistrationSchema.prototype, "issuedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VehicleRegistrationSchema.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VehicleRegistrationSchema.prototype, "validFromDate", void 0);
    return VehicleRegistrationSchema;
}(SpeakeasyBase));
export { VehicleRegistrationSchema };
