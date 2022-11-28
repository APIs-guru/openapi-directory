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
var BaseF3XFiling = /** @class */ (function (_super) {
    __extends(BaseF3XFiling, _super);
    function BaseF3XFiling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amend_address" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "amendAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amended_by" }),
        __metadata("design:type", Number)
    ], BaseF3XFiling.prototype, "amendedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "amendment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_chain" }),
        __metadata("design:type", Array)
    ], BaseF3XFiling.prototype, "amendmentChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], BaseF3XFiling.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], BaseF3XFiling.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_description" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "documentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_date" }),
        __metadata("design:type", Date)
    ], BaseF3XFiling.prototype, "electionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_state" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "electionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_file_id" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "fecFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], BaseF3XFiling.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_amended" }),
        __metadata("design:type", Boolean)
    ], BaseF3XFiling.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], BaseF3XFiling.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_filing" }),
        __metadata("design:type", Number)
    ], BaseF3XFiling.prototype, "mostRecentFiling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qualified_multicandidate_committee" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "qualifiedMulticandidateCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], BaseF3XFiling.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], BaseF3XFiling.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rpt_pgi" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "rptPgi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sign_date" }),
        __metadata("design:type", Date)
    ], BaseF3XFiling.prototype, "signDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_1" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "street1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_2" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "street2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary_lines" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "summaryLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], BaseF3XFiling.prototype, "zip", void 0);
    return BaseF3XFiling;
}(SpeakeasyBase));
export { BaseF3XFiling };
