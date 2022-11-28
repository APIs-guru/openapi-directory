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
var Electioneering = /** @class */ (function (_super) {
    __extends(Electioneering, _super);
    function Electioneering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calculated_candidate_share" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "calculatedCandidateShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_district" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "candidateDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_state" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "candidateState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communication_date" }),
        __metadata("design:type", Date)
    ], Electioneering.prototype, "communicationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_amount" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "disbursementAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_date" }),
        __metadata("design:type", Date)
    ], Electioneering.prototype, "disbursementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "electionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_of_candidates" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "numberOfCandidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_state" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "payeeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_distribution_date" }),
        __metadata("design:type", Date)
    ], Electioneering.prototype, "publicDistributionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose_description" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "purposeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], Electioneering.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sb_image_num" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "sbImageNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sb_link_id" }),
        __metadata("design:type", String)
    ], Electioneering.prototype, "sbLinkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", Number)
    ], Electioneering.prototype, "subId", void 0);
    return Electioneering;
}(SpeakeasyBase));
export { Electioneering };
