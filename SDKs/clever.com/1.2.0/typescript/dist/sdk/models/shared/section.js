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
import { Term } from "./term";
export var SectionGradeEnum;
(function (SectionGradeEnum) {
    SectionGradeEnum["One"] = "1";
    SectionGradeEnum["Two"] = "2";
    SectionGradeEnum["Three"] = "3";
    SectionGradeEnum["Four"] = "4";
    SectionGradeEnum["Five"] = "5";
    SectionGradeEnum["Six"] = "6";
    SectionGradeEnum["Seven"] = "7";
    SectionGradeEnum["Eight"] = "8";
    SectionGradeEnum["Nine"] = "9";
    SectionGradeEnum["Ten"] = "10";
    SectionGradeEnum["Eleven"] = "11";
    SectionGradeEnum["Twelve"] = "12";
    SectionGradeEnum["PreKindergarten"] = "PreKindergarten";
    SectionGradeEnum["Kindergarten"] = "Kindergarten";
    SectionGradeEnum["PostGraduate"] = "PostGraduate";
    SectionGradeEnum["Other"] = "Other";
})(SectionGradeEnum || (SectionGradeEnum = {}));
export var SectionSubjectEnum;
(function (SectionSubjectEnum) {
    SectionSubjectEnum["EnglishLanguageArts"] = "english/language arts";
    SectionSubjectEnum["Math"] = "math";
    SectionSubjectEnum["Science"] = "science";
    SectionSubjectEnum["SocialStudies"] = "social studies";
    SectionSubjectEnum["Language"] = "language";
    SectionSubjectEnum["HomeroomAdvisory"] = "homeroom/advisory";
    SectionSubjectEnum["InterventionsOnlineLearning"] = "interventions/online learning";
    SectionSubjectEnum["TechnologyAndEngineering"] = "technology and engineering";
    SectionSubjectEnum["PeAndHealth"] = "PE and health";
    SectionSubjectEnum["ArtsAndMusic"] = "arts and music";
    SectionSubjectEnum["Other"] = "other";
})(SectionSubjectEnum || (SectionSubjectEnum = {}));
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=course_description" }),
        __metadata("design:type", String)
    ], Section.prototype, "courseDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=course_name" }),
        __metadata("design:type", String)
    ], Section.prototype, "courseName", void 0);
    __decorate([
        Metadata({ data: "json, name=course_number" }),
        __metadata("design:type", String)
    ], Section.prototype, "courseNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], Section.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], Section.prototype, "district", void 0);
    __decorate([
        Metadata({ data: "json, name=grade" }),
        __metadata("design:type", String)
    ], Section.prototype, "grade", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Section.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], Section.prototype, "lastModified", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Section.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], Section.prototype, "period", void 0);
    __decorate([
        Metadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], Section.prototype, "school", void 0);
    __decorate([
        Metadata({ data: "json, name=section_number" }),
        __metadata("design:type", String)
    ], Section.prototype, "sectionNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sis_id" }),
        __metadata("design:type", String)
    ], Section.prototype, "sisId", void 0);
    __decorate([
        Metadata({ data: "json, name=students" }),
        __metadata("design:type", Array)
    ], Section.prototype, "students", void 0);
    __decorate([
        Metadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], Section.prototype, "subject", void 0);
    __decorate([
        Metadata({ data: "json, name=teacher" }),
        __metadata("design:type", String)
    ], Section.prototype, "teacher", void 0);
    __decorate([
        Metadata({ data: "json, name=teachers" }),
        __metadata("design:type", Array)
    ], Section.prototype, "teachers", void 0);
    __decorate([
        Metadata({ data: "json, name=term" }),
        __metadata("design:type", Term)
    ], Section.prototype, "term", void 0);
    return Section;
}(SpeakeasyBase));
export { Section };
