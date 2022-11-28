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
import { Location } from "./location";
import { Principal } from "./principal";
export var SchoolHighGradeEnum;
(function (SchoolHighGradeEnum) {
    SchoolHighGradeEnum["One"] = "1";
    SchoolHighGradeEnum["Two"] = "2";
    SchoolHighGradeEnum["Three"] = "3";
    SchoolHighGradeEnum["Four"] = "4";
    SchoolHighGradeEnum["Five"] = "5";
    SchoolHighGradeEnum["Six"] = "6";
    SchoolHighGradeEnum["Seven"] = "7";
    SchoolHighGradeEnum["Eight"] = "8";
    SchoolHighGradeEnum["Nine"] = "9";
    SchoolHighGradeEnum["Ten"] = "10";
    SchoolHighGradeEnum["Eleven"] = "11";
    SchoolHighGradeEnum["Twelve"] = "12";
    SchoolHighGradeEnum["PreKindergarten"] = "PreKindergarten";
    SchoolHighGradeEnum["Kindergarten"] = "Kindergarten";
    SchoolHighGradeEnum["PostGraduate"] = "PostGraduate";
    SchoolHighGradeEnum["Other"] = "Other";
})(SchoolHighGradeEnum || (SchoolHighGradeEnum = {}));
export var SchoolLowGradeEnum;
(function (SchoolLowGradeEnum) {
    SchoolLowGradeEnum["One"] = "1";
    SchoolLowGradeEnum["Two"] = "2";
    SchoolLowGradeEnum["Three"] = "3";
    SchoolLowGradeEnum["Four"] = "4";
    SchoolLowGradeEnum["Five"] = "5";
    SchoolLowGradeEnum["Six"] = "6";
    SchoolLowGradeEnum["Seven"] = "7";
    SchoolLowGradeEnum["Eight"] = "8";
    SchoolLowGradeEnum["Nine"] = "9";
    SchoolLowGradeEnum["Ten"] = "10";
    SchoolLowGradeEnum["Eleven"] = "11";
    SchoolLowGradeEnum["Twelve"] = "12";
    SchoolLowGradeEnum["PreKindergarten"] = "PreKindergarten";
    SchoolLowGradeEnum["Kindergarten"] = "Kindergarten";
    SchoolLowGradeEnum["PostGraduate"] = "PostGraduate";
    SchoolLowGradeEnum["Other"] = "Other";
})(SchoolLowGradeEnum || (SchoolLowGradeEnum = {}));
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], School.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], School.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=high_grade" }),
        __metadata("design:type", String)
    ], School.prototype, "highGrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], School.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], School.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], School.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=low_grade" }),
        __metadata("design:type", String)
    ], School.prototype, "lowGrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mdr_number" }),
        __metadata("design:type", String)
    ], School.prototype, "mdrNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], School.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nces_id" }),
        __metadata("design:type", String)
    ], School.prototype, "ncesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], School.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", Principal)
    ], School.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school_number" }),
        __metadata("design:type", String)
    ], School.prototype, "schoolNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sis_id" }),
        __metadata("design:type", String)
    ], School.prototype, "sisId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_id" }),
        __metadata("design:type", String)
    ], School.prototype, "stateId", void 0);
    return School;
}(SpeakeasyBase));
export { School };
