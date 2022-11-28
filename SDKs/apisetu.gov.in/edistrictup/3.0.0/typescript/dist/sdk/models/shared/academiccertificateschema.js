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
var AcademicCertificateSchemaCertificateDataExamination = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaCertificateDataExamination, _super);
    function AcademicCertificateSchemaCertificateDataExamination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataExamination.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataExamination.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataExamination.prototype, "year", void 0);
    return AcademicCertificateSchemaCertificateDataExamination;
}(SpeakeasyBase));
export { AcademicCertificateSchemaCertificateDataExamination };
var AcademicCertificateSchemaCertificateDataPerformanceSubjects = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaCertificateDataPerformanceSubjects, _super);
    function AcademicCertificateSchemaCertificateDataPerformanceSubjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "gp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "gpMax", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "grade", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksMax", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksMaxPractical", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksMaxTheory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksPractical", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksTheory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "marksTotal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformanceSubjects.prototype, "name", void 0);
    return AcademicCertificateSchemaCertificateDataPerformanceSubjects;
}(SpeakeasyBase));
export { AcademicCertificateSchemaCertificateDataPerformanceSubjects };
var AcademicCertificateSchemaCertificateDataPerformance = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaCertificateDataPerformance, _super);
    function AcademicCertificateSchemaCertificateDataPerformance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: AcademicCertificateSchemaCertificateDataPerformanceSubjects }),
        __metadata("design:type", Array)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "subjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "cgpa", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "cgpaMax", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "grade", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "marksMax", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "marksTotal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "resultDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataPerformance.prototype, "updateDate", void 0);
    return AcademicCertificateSchemaCertificateDataPerformance;
}(SpeakeasyBase));
export { AcademicCertificateSchemaCertificateDataPerformance };
var AcademicCertificateSchemaCertificateDataSchool = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaCertificateDataSchool, _super);
    function AcademicCertificateSchemaCertificateDataSchool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataSchool.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaCertificateDataSchool.prototype, "name", void 0);
    return AcademicCertificateSchemaCertificateDataSchool;
}(SpeakeasyBase));
export { AcademicCertificateSchemaCertificateDataSchool };
var AcademicCertificateSchemaCertificateData = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaCertificateData, _super);
    function AcademicCertificateSchemaCertificateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaCertificateDataExamination)
    ], AcademicCertificateSchemaCertificateData.prototype, "examination", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaCertificateDataPerformance)
    ], AcademicCertificateSchemaCertificateData.prototype, "performance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaCertificateDataSchool)
    ], AcademicCertificateSchemaCertificateData.prototype, "school", void 0);
    return AcademicCertificateSchemaCertificateData;
}(SpeakeasyBase));
export { AcademicCertificateSchemaCertificateData };
var AcademicCertificateSchemaIssuedByOrganizationAddress = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedByOrganizationAddress, _super);
    function AcademicCertificateSchemaIssuedByOrganizationAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganizationAddress.prototype, "vtc", void 0);
    return AcademicCertificateSchemaIssuedByOrganizationAddress;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedByOrganizationAddress };
var AcademicCertificateSchemaIssuedByOrganization = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedByOrganization, _super);
    function AcademicCertificateSchemaIssuedByOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedByOrganizationAddress)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "tin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedByOrganization.prototype, "uid", void 0);
    return AcademicCertificateSchemaIssuedByOrganization;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedByOrganization };
var AcademicCertificateSchemaIssuedBy = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedBy, _super);
    function AcademicCertificateSchemaIssuedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedByOrganization)
    ], AcademicCertificateSchemaIssuedBy.prototype, "organization", void 0);
    return AcademicCertificateSchemaIssuedBy;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedBy };
var AcademicCertificateSchemaIssuedToPersonAddress = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedToPersonAddress, _super);
    function AcademicCertificateSchemaIssuedToPersonAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "landmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonAddress.prototype, "vtc", void 0);
    return AcademicCertificateSchemaIssuedToPersonAddress;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedToPersonAddress };
var AcademicCertificateSchemaIssuedToPersonPhoto = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedToPersonPhoto, _super);
    function AcademicCertificateSchemaIssuedToPersonPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPersonPhoto.prototype, "format", void 0);
    return AcademicCertificateSchemaIssuedToPersonPhoto;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedToPersonPhoto };
var AcademicCertificateSchemaIssuedToPerson = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedToPerson, _super);
    function AcademicCertificateSchemaIssuedToPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedToPersonAddress)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedToPersonPhoto)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "disabilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "motherName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "religion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "swd", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "swdIndicator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchemaIssuedToPerson.prototype, "uid", void 0);
    return AcademicCertificateSchemaIssuedToPerson;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedToPerson };
var AcademicCertificateSchemaIssuedTo = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchemaIssuedTo, _super);
    function AcademicCertificateSchemaIssuedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedToPerson)
    ], AcademicCertificateSchemaIssuedTo.prototype, "person", void 0);
    return AcademicCertificateSchemaIssuedTo;
}(SpeakeasyBase));
export { AcademicCertificateSchemaIssuedTo };
var AcademicCertificateSchema = /** @class */ (function (_super) {
    __extends(AcademicCertificateSchema, _super);
    function AcademicCertificateSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaCertificateData)
    ], AcademicCertificateSchema.prototype, "certificateData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedBy)
    ], AcademicCertificateSchema.prototype, "issuedBy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcademicCertificateSchemaIssuedTo)
    ], AcademicCertificateSchema.prototype, "issuedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcademicCertificateSchema.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcademicCertificateSchema.prototype, "validFromDate", void 0);
    return AcademicCertificateSchema;
}(SpeakeasyBase));
export { AcademicCertificateSchema };
