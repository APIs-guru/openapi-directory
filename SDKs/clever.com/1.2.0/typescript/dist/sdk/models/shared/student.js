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
import { Credentials } from "./credentials";
import { Location } from "./location";
import { Name } from "./name";
export var StudentEllStatusEnum;
(function (StudentEllStatusEnum) {
    StudentEllStatusEnum["Y"] = "Y";
    StudentEllStatusEnum["N"] = "N";
    StudentEllStatusEnum["Unknown"] = "";
})(StudentEllStatusEnum || (StudentEllStatusEnum = {}));
export var StudentGenderEnum;
(function (StudentGenderEnum) {
    StudentGenderEnum["M"] = "M";
    StudentGenderEnum["F"] = "F";
    StudentGenderEnum["Unknown"] = "";
})(StudentGenderEnum || (StudentGenderEnum = {}));
export var StudentGradeEnum;
(function (StudentGradeEnum) {
    StudentGradeEnum["One"] = "1";
    StudentGradeEnum["Two"] = "2";
    StudentGradeEnum["Three"] = "3";
    StudentGradeEnum["Four"] = "4";
    StudentGradeEnum["Five"] = "5";
    StudentGradeEnum["Six"] = "6";
    StudentGradeEnum["Seven"] = "7";
    StudentGradeEnum["Eight"] = "8";
    StudentGradeEnum["Nine"] = "9";
    StudentGradeEnum["Ten"] = "10";
    StudentGradeEnum["Eleven"] = "11";
    StudentGradeEnum["Twelve"] = "12";
    StudentGradeEnum["PreKindergarten"] = "PreKindergarten";
    StudentGradeEnum["Kindergarten"] = "Kindergarten";
    StudentGradeEnum["PostGraduate"] = "PostGraduate";
    StudentGradeEnum["Other"] = "Other";
})(StudentGradeEnum || (StudentGradeEnum = {}));
export var StudentHispanicEthnicityEnum;
(function (StudentHispanicEthnicityEnum) {
    StudentHispanicEthnicityEnum["Y"] = "Y";
    StudentHispanicEthnicityEnum["N"] = "N";
    StudentHispanicEthnicityEnum["Unknown"] = "";
})(StudentHispanicEthnicityEnum || (StudentHispanicEthnicityEnum = {}));
export var StudentRaceEnum;
(function (StudentRaceEnum) {
    StudentRaceEnum["Caucasian"] = "Caucasian";
    StudentRaceEnum["Asian"] = "Asian";
    StudentRaceEnum["BlackOrAfricanAmerican"] = "Black or African American";
    StudentRaceEnum["AmericanIndian"] = "American Indian";
    StudentRaceEnum["HawaiianOrOtherPacificIslander"] = "Hawaiian or Other Pacific Islander";
    StudentRaceEnum["TwoOrMoreRaces"] = "Two or More Races";
    StudentRaceEnum["UnknownMixed"] = "Unknown";
    StudentRaceEnum["UnknownUpper"] = "";
})(StudentRaceEnum || (StudentRaceEnum = {}));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], Student.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=credentials" }),
        __metadata("design:type", Credentials)
    ], Student.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], Student.prototype, "district", void 0);
    __decorate([
        Metadata({ data: "json, name=dob" }),
        __metadata("design:type", String)
    ], Student.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=ell_status" }),
        __metadata("design:type", String)
    ], Student.prototype, "ellStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Student.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Student.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=grade" }),
        __metadata("design:type", String)
    ], Student.prototype, "grade", void 0);
    __decorate([
        Metadata({ data: "json, name=graduation_year" }),
        __metadata("design:type", String)
    ], Student.prototype, "graduationYear", void 0);
    __decorate([
        Metadata({ data: "json, name=hispanic_ethnicity" }),
        __metadata("design:type", String)
    ], Student.prototype, "hispanicEthnicity", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Student.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], Student.prototype, "lastModified", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], Student.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", Name)
    ], Student.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=race" }),
        __metadata("design:type", String)
    ], Student.prototype, "race", void 0);
    __decorate([
        Metadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], Student.prototype, "school", void 0);
    __decorate([
        Metadata({ data: "json, name=schools" }),
        __metadata("design:type", Array)
    ], Student.prototype, "schools", void 0);
    __decorate([
        Metadata({ data: "json, name=sis_id" }),
        __metadata("design:type", String)
    ], Student.prototype, "sisId", void 0);
    __decorate([
        Metadata({ data: "json, name=state_id" }),
        __metadata("design:type", String)
    ], Student.prototype, "stateId", void 0);
    __decorate([
        Metadata({ data: "json, name=student_number" }),
        __metadata("design:type", String)
    ], Student.prototype, "studentNumber", void 0);
    return Student;
}(SpeakeasyBase));
export { Student };
