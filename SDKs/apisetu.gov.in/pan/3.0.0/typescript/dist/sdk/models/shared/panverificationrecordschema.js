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
var PanVerificationRecordSchemaCertificateDataPanVerificationRecord = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaCertificateDataPanVerificationRecord, _super);
    function PanVerificationRecordSchemaCertificateDataPanVerificationRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaCertificateDataPanVerificationRecord.prototype, "num", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaCertificateDataPanVerificationRecord.prototype, "verifiedOn", void 0);
    return PanVerificationRecordSchemaCertificateDataPanVerificationRecord;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaCertificateDataPanVerificationRecord };
var PanVerificationRecordSchemaCertificateData = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaCertificateData, _super);
    function PanVerificationRecordSchemaCertificateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaCertificateDataPanVerificationRecord)
    ], PanVerificationRecordSchemaCertificateData.prototype, "panVerificationRecord", void 0);
    return PanVerificationRecordSchemaCertificateData;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaCertificateData };
var PanVerificationRecordSchemaIssuedByOrganizationAddress = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedByOrganizationAddress, _super);
    function PanVerificationRecordSchemaIssuedByOrganizationAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganizationAddress.prototype, "vtc", void 0);
    return PanVerificationRecordSchemaIssuedByOrganizationAddress;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedByOrganizationAddress };
var PanVerificationRecordSchemaIssuedByOrganization = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedByOrganization, _super);
    function PanVerificationRecordSchemaIssuedByOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedByOrganizationAddress)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "tin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedByOrganization.prototype, "uid", void 0);
    return PanVerificationRecordSchemaIssuedByOrganization;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedByOrganization };
var PanVerificationRecordSchemaIssuedBy = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedBy, _super);
    function PanVerificationRecordSchemaIssuedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedByOrganization)
    ], PanVerificationRecordSchemaIssuedBy.prototype, "organization", void 0);
    return PanVerificationRecordSchemaIssuedBy;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedBy };
var PanVerificationRecordSchemaIssuedToPersonAddress = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedToPersonAddress, _super);
    function PanVerificationRecordSchemaIssuedToPersonAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonAddress.prototype, "vtc", void 0);
    return PanVerificationRecordSchemaIssuedToPersonAddress;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedToPersonAddress };
var PanVerificationRecordSchemaIssuedToPersonPhoto = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedToPersonPhoto, _super);
    function PanVerificationRecordSchemaIssuedToPersonPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPersonPhoto.prototype, "format", void 0);
    return PanVerificationRecordSchemaIssuedToPersonPhoto;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedToPersonPhoto };
var PanVerificationRecordSchemaIssuedToPerson = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedToPerson, _super);
    function PanVerificationRecordSchemaIssuedToPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedToPersonAddress)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedToPersonPhoto)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "religion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "swd", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "swdIndicator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchemaIssuedToPerson.prototype, "uid", void 0);
    return PanVerificationRecordSchemaIssuedToPerson;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedToPerson };
var PanVerificationRecordSchemaIssuedTo = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchemaIssuedTo, _super);
    function PanVerificationRecordSchemaIssuedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedToPerson)
    ], PanVerificationRecordSchemaIssuedTo.prototype, "person", void 0);
    return PanVerificationRecordSchemaIssuedTo;
}(SpeakeasyBase));
export { PanVerificationRecordSchemaIssuedTo };
var PanVerificationRecordSchema = /** @class */ (function (_super) {
    __extends(PanVerificationRecordSchema, _super);
    function PanVerificationRecordSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaCertificateData)
    ], PanVerificationRecordSchema.prototype, "certificateData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedBy)
    ], PanVerificationRecordSchema.prototype, "issuedBy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PanVerificationRecordSchemaIssuedTo)
    ], PanVerificationRecordSchema.prototype, "issuedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PanVerificationRecordSchema.prototype, "validFromDate", void 0);
    return PanVerificationRecordSchema;
}(SpeakeasyBase));
export { PanVerificationRecordSchema };
