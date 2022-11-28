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
var DrivingLicenseSchemaCertificateDataDrivingLicense = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaCertificateDataDrivingLicense, _super);
    function DrivingLicenseSchemaCertificateDataDrivingLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaCertificateDataDrivingLicense.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaCertificateDataDrivingLicense.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaCertificateDataDrivingLicense.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaCertificateDataDrivingLicense.prototype, "endorseDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaCertificateDataDrivingLicense.prototype, "issueDate", void 0);
    return DrivingLicenseSchemaCertificateDataDrivingLicense;
}(SpeakeasyBase));
export { DrivingLicenseSchemaCertificateDataDrivingLicense };
var DrivingLicenseSchemaCertificateData = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaCertificateData, _super);
    function DrivingLicenseSchemaCertificateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaCertificateDataDrivingLicense)
    ], DrivingLicenseSchemaCertificateData.prototype, "drivingLicense", void 0);
    return DrivingLicenseSchemaCertificateData;
}(SpeakeasyBase));
export { DrivingLicenseSchemaCertificateData };
var DrivingLicenseSchemaIssuedByOrganizationAddress = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedByOrganizationAddress, _super);
    function DrivingLicenseSchemaIssuedByOrganizationAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganizationAddress.prototype, "vtc", void 0);
    return DrivingLicenseSchemaIssuedByOrganizationAddress;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedByOrganizationAddress };
var DrivingLicenseSchemaIssuedByOrganization = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedByOrganization, _super);
    function DrivingLicenseSchemaIssuedByOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedByOrganizationAddress)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "tin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedByOrganization.prototype, "uid", void 0);
    return DrivingLicenseSchemaIssuedByOrganization;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedByOrganization };
var DrivingLicenseSchemaIssuedBy = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedBy, _super);
    function DrivingLicenseSchemaIssuedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedByOrganization)
    ], DrivingLicenseSchemaIssuedBy.prototype, "organization", void 0);
    return DrivingLicenseSchemaIssuedBy;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedBy };
var DrivingLicenseSchemaIssuedToPersonAddress = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedToPersonAddress, _super);
    function DrivingLicenseSchemaIssuedToPersonAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonAddress.prototype, "vtc", void 0);
    return DrivingLicenseSchemaIssuedToPersonAddress;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedToPersonAddress };
var DrivingLicenseSchemaIssuedToPersonPhoto = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedToPersonPhoto, _super);
    function DrivingLicenseSchemaIssuedToPersonPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPersonPhoto.prototype, "format", void 0);
    return DrivingLicenseSchemaIssuedToPersonPhoto;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedToPersonPhoto };
var DrivingLicenseSchemaIssuedToPerson = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedToPerson, _super);
    function DrivingLicenseSchemaIssuedToPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedToPersonAddress)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedToPersonPhoto)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "religion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "swd", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "swdIndicator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchemaIssuedToPerson.prototype, "uid", void 0);
    return DrivingLicenseSchemaIssuedToPerson;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedToPerson };
var DrivingLicenseSchemaIssuedTo = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchemaIssuedTo, _super);
    function DrivingLicenseSchemaIssuedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedToPerson)
    ], DrivingLicenseSchemaIssuedTo.prototype, "person", void 0);
    return DrivingLicenseSchemaIssuedTo;
}(SpeakeasyBase));
export { DrivingLicenseSchemaIssuedTo };
var DrivingLicenseSchema = /** @class */ (function (_super) {
    __extends(DrivingLicenseSchema, _super);
    function DrivingLicenseSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaCertificateData)
    ], DrivingLicenseSchema.prototype, "certificateData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedBy)
    ], DrivingLicenseSchema.prototype, "issuedBy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivingLicenseSchemaIssuedTo)
    ], DrivingLicenseSchema.prototype, "issuedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivingLicenseSchema.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivingLicenseSchema.prototype, "prevNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivingLicenseSchema.prototype, "validFromDate", void 0);
    return DrivingLicenseSchema;
}(SpeakeasyBase));
export { DrivingLicenseSchema };
