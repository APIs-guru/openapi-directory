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
var CommitteeHistory = /** @class */ (function (_super) {
    __extends(CommitteeHistory, _super);
    function CommitteeHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "affiliatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_ids" }),
        __metadata("design:type", Array)
    ], CommitteeHistory.prototype, "candidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type_full" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "committeeTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convert_to_pac_flag" }),
        __metadata("design:type", Boolean)
    ], CommitteeHistory.prototype, "convertToPacFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], CommitteeHistory.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], CommitteeHistory.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles_has_activity" }),
        __metadata("design:type", Array)
    ], CommitteeHistory.prototype, "cyclesHasActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles_has_financial" }),
        __metadata("design:type", Array)
    ], CommitteeHistory.prototype, "cyclesHasFinancial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation_full" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "designationFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=former_candidate_election_year" }),
        __metadata("design:type", Number)
    ], CommitteeHistory.prototype, "formerCandidateElectionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=former_candidate_id" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "formerCandidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=former_candidate_name" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "formerCandidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=former_committee_name" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "formerCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], CommitteeHistory.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_cycle_has_activity" }),
        __metadata("design:type", Number)
    ], CommitteeHistory.prototype, "lastCycleHasActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_cycle_has_financial" }),
        __metadata("design:type", Number)
    ], CommitteeHistory.prototype, "lastCycleHasFinancial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type_full" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "organizationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" }),
        __metadata("design:type", Array)
    ], CommitteeHistory.prototype, "sponsorCandidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_full" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "stateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_1" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "street1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_2" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "street2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], CommitteeHistory.prototype, "zip", void 0);
    return CommitteeHistory;
}(SpeakeasyBase));
export { CommitteeHistory };
