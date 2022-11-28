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
import { EFilings } from "./efilings";
var ScheduleEEfile = /** @class */ (function (_super) {
    __extends(ScheduleEEfile, _super);
    function ScheduleEEfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_party" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_code" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "categoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleEEfile.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dissemination_date" }),
        __metadata("design:type", Date)
    ], ScheduleEEfile.prototype, "disseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_amount" }),
        __metadata("design:type", Number)
    ], ScheduleEEfile.prototype, "expenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_date" }),
        __metadata("design:type", Date)
    ], ScheduleEEfile.prototype, "expenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_description" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "expenditureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleEEfile.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_first_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filerFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_last_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filerLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filerMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_prefix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filerPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filer_suffix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filerSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing" }),
        __metadata("design:type", EFilings)
    ], ScheduleEEfile.prototype, "filing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_notice" }),
        __metadata("design:type", Boolean)
    ], ScheduleEEfile.prototype, "isNotice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_timestamp" }),
        __metadata("design:type", Date)
    ], ScheduleEEfile.prototype, "loadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], ScheduleEEfile.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notary_sign_date" }),
        __metadata("design:type", Date)
    ], ScheduleEEfile.prototype, "notarySignDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_total_ytd" }),
        __metadata("design:type", Number)
    ], ScheduleEEfile.prototype, "officeTotalYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_city" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_first_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_last_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_prefix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_state" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_street_1" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_street_2" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_suffix" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_zip" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "payeeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related_line_number" }),
        __metadata("design:type", Number)
    ], ScheduleEEfile.prototype, "relatedLineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "supportOpposeIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleEEfile.prototype, "transactionId", void 0);
    return ScheduleEEfile;
}(SpeakeasyBase));
export { ScheduleEEfile };
