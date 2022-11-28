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
import { CommitteeHistory } from "./committeehistory";
var ScheduleE = /** @class */ (function (_super) {
    __extends(ScheduleE, _super);
    function ScheduleE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_number" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "amendmentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_party" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_code" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "categoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_code_full" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "categoryCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleE.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dissemination_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "disseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "electionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "electionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_amount" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "expenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "expenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_description" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "expenditureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_first_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filerFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_last_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filerLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filerMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_prefix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filerPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_suffix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filerSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "filingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_sign_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "independentSignDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_sign_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "independentSignName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_notice" }),
        __metadata("design:type", Boolean)
    ], ScheduleE.prototype, "isNotice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code_full" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "memoCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoed_subtotal" }),
        __metadata("design:type", Boolean)
    ], ScheduleE.prototype, "memoedSubtotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], ScheduleE.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notary_commission_expiration_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "notaryCommissionExpirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notary_sign_date" }),
        __metadata("design:type", Date)
    ], ScheduleE.prototype, "notarySignDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notary_sign_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "notarySignName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_total_ytd" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "officeTotalYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_city" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_first_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_last_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_prefix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_state" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_street_1" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_street_2" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_suffix" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_zip" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "payeeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_file_number" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "previousFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], ScheduleE.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "supportOpposeIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleE.prototype, "transactionId", void 0);
    return ScheduleE;
}(SpeakeasyBase));
export { ScheduleE };
