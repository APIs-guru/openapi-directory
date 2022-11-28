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
var ScheduleBEfile = /** @class */ (function (_super) {
    __extends(ScheduleBEfile, _super);
    function ScheduleBEfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beneficiary_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "beneficiaryCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleBEfile.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_amount" }),
        __metadata("design:type", Number)
    ], ScheduleBEfile.prototype, "disbursementAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_date" }),
        __metadata("design:type", Date)
    ], ScheduleBEfile.prototype, "disbursementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_description" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "disbursementDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_type" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "disbursementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleBEfile.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing" }),
        __metadata("design:type", EFilings)
    ], ScheduleBEfile.prototype, "filing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_notice" }),
        __metadata("design:type", Boolean)
    ], ScheduleBEfile.prototype, "isNotice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_timestamp" }),
        __metadata("design:type", Date)
    ], ScheduleBEfile.prototype, "loadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_city" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_name" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_prefix" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_state" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_suffix" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_zip" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "recipientZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related_line_number" }),
        __metadata("design:type", Number)
    ], ScheduleBEfile.prototype, "relatedLineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=semi_annual_bundled_refund" }),
        __metadata("design:type", Number)
    ], ScheduleBEfile.prototype, "semiAnnualBundledRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleBEfile.prototype, "transactionId", void 0);
    return ScheduleBEfile;
}(SpeakeasyBase));
export { ScheduleBEfile };
