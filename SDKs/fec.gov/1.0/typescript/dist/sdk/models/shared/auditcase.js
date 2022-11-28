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
import { AuditCaseCategoryRelation } from "./auditcasecategoryrelation";
var AuditCase = /** @class */ (function (_super) {
    __extends(AuditCase, _super);
    function AuditCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audit_case_id" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "auditCaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audit_id" }),
        __metadata("design:type", Number)
    ], AuditCase.prototype, "auditId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_description" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "committeeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designation" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "committeeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], AuditCase.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=far_release_date" }),
        __metadata("design:type", Date)
    ], AuditCase.prototype, "farReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_to_report" }),
        __metadata("design:type", String)
    ], AuditCase.prototype, "linkToReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_category_list", elemType: AuditCaseCategoryRelation }),
        __metadata("design:type", Array)
    ], AuditCase.prototype, "primaryCategoryList", void 0);
    return AuditCase;
}(SpeakeasyBase));
export { AuditCase };
