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
var ScheduleAEfile = /** @class */ (function (_super) {
    __extends(ScheduleAEfile, _super);
    function ScheduleAEfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleAEfile.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "contributionReceiptAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_receipt_date" }),
        __metadata("design:type", Date)
    ], ScheduleAEfile.prototype, "contributionReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_aggregate_ytd" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "contributorAggregateYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_city" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_employer" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_first_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_last_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_name" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_occupation" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_prefix" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_state" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_suffix" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_zip" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "contributorZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "fecElectionTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing" }),
        __metadata("design:type", EFilings)
    ], ScheduleAEfile.prototype, "filing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_timestamp" }),
        __metadata("design:type", Date)
    ], ScheduleAEfile.prototype, "loadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pgo" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "pgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related_line_number" }),
        __metadata("design:type", Number)
    ], ScheduleAEfile.prototype, "relatedLineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleAEfile.prototype, "transactionId", void 0);
    return ScheduleAEfile;
}(SpeakeasyBase));
export { ScheduleAEfile };
