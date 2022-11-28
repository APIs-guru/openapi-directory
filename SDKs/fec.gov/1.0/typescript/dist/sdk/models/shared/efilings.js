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
var EFilings = /** @class */ (function (_super) {
    __extends(EFilings, _super);
    function EFilings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amended_by" }),
        __metadata("design:type", Number)
    ], EFilings.prototype, "amendedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_chain" }),
        __metadata("design:type", Array)
    ], EFilings.prototype, "amendmentChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_number" }),
        __metadata("design:type", Number)
    ], EFilings.prototype, "amendmentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amends_file" }),
        __metadata("design:type", Number)
    ], EFilings.prototype, "amendsFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], EFilings.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], EFilings.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_description" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "documentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ending_image_number" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "endingImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_file_id" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "fecFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], EFilings.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filed_date" }),
        __metadata("design:type", Date)
    ], EFilings.prototype, "filedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_type" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_amended" }),
        __metadata("design:type", Boolean)
    ], EFilings.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_timestamp" }),
        __metadata("design:type", Date)
    ], EFilings.prototype, "loadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], EFilings.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_filing" }),
        __metadata("design:type", Number)
    ], EFilings.prototype, "mostRecentFiling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], EFilings.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], EFilings.prototype, "receiptDate", void 0);
    return EFilings;
}(SpeakeasyBase));
export { EFilings };
