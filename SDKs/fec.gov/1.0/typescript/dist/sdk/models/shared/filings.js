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
var Filings = /** @class */ (function (_super) {
    __extends(Filings, _super);
    function Filings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additional_bank_names" }),
        __metadata("design:type", Array)
    ], Filings.prototype, "additionalBankNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_chain" }),
        __metadata("design:type", Array)
    ], Filings.prototype, "amendmentChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], Filings.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_version" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "amendmentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_city" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_name" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_state" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_street_1" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_street_2" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_depository_zip" }),
        __metadata("design:type", String)
    ], Filings.prototype, "bankDepositoryZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], Filings.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], Filings.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], Filings.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "cashOnHandBeginningPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "cashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], Filings.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], Filings.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], Filings.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], Filings.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], Filings.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], Filings.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "debtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "debtsOwedToCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_description" }),
        __metadata("design:type", String)
    ], Filings.prototype, "documentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_type" }),
        __metadata("design:type", String)
    ], Filings.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_type_full" }),
        __metadata("design:type", String)
    ], Filings.prototype, "documentTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_year" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ending_image_number" }),
        __metadata("design:type", String)
    ], Filings.prototype, "endingImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_file_id" }),
        __metadata("design:type", String)
    ], Filings.prototype, "fecFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], Filings.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_category" }),
        __metadata("design:type", String)
    ], Filings.prototype, "formCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_type" }),
        __metadata("design:type", String)
    ], Filings.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=house_personal_funds" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "housePersonalFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Filings.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_amended" }),
        __metadata("design:type", Boolean)
    ], Filings.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=means_filed" }),
        __metadata("design:type", String)
    ], Filings.prototype, "meansFiled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], Filings.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_file_number" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "mostRecentFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_donations" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "netDonations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office" }),
        __metadata("design:type", String)
    ], Filings.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opposition_personal_funds" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "oppositionPersonalFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], Filings.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], Filings.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_file_number" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "previousFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_general_indicator" }),
        __metadata("design:type", String)
    ], Filings.prototype, "primaryGeneralIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], Filings.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], Filings.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type_full" }),
        __metadata("design:type", String)
    ], Filings.prototype, "reportTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_type" }),
        __metadata("design:type", String)
    ], Filings.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=senate_personal_funds" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "senatePersonalFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Filings.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], Filings.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_communication_cost" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "totalCommunicationCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_disbursements" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "totalDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_independent_expenditures" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "totalIndependentExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_individual_contributions" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "totalIndividualContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_receipts" }),
        __metadata("design:type", Number)
    ], Filings.prototype, "totalReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], Filings.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Date)
    ], Filings.prototype, "updateDate", void 0);
    return Filings;
}(SpeakeasyBase));
export { Filings };
