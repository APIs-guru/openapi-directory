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
var BaseF3PFiling = /** @class */ (function (_super) {
    __extends(BaseF3PFiling, _super);
    function BaseF3PFiling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amended_by" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "amendedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "amendment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_chain" }),
        __metadata("design:type", Array)
    ], BaseF3PFiling.prototype, "amendmentChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "cashOnHandBeginningPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "cashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], BaseF3PFiling.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], BaseF3PFiling.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "debtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "debtsOwedToCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_description" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "documentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_date" }),
        __metadata("design:type", Date)
    ], BaseF3PFiling.prototype, "electionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_state" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "electionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_subject_to_limits" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "expenditureSubjectToLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_file_id" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "fecFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=general_election" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "generalElection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_amended" }),
        __metadata("design:type", Boolean)
    ], BaseF3PFiling.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], BaseF3PFiling.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_filing" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "mostRecentFiling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_contributions_cycle_to_date" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "netContributionsCycleToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_cycle_to_date" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "netOperatingExpendituresCycleToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_election" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "primaryElection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], BaseF3PFiling.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], BaseF3PFiling.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rpt_pgi" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "rptPgi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sign_date" }),
        __metadata("design:type", Date)
    ], BaseF3PFiling.prototype, "signDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_1" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "street1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_2" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "street2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotal_summary_period" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "subtotalSummaryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary_lines" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "summaryLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_first_name" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "treasurerFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_last_name" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "treasurerLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_middle_name" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "treasurerMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], BaseF3PFiling.prototype, "zip", void 0);
    return BaseF3PFiling;
}(SpeakeasyBase));
export { BaseF3PFiling };
