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
var CandidatePrincipalCommittees = /** @class */ (function (_super) {
    __extends(CandidatePrincipalCommittees, _super);
    function CandidatePrincipalCommittees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "affiliatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_ids" }),
        __metadata("design:type", Array)
    ], CandidatePrincipalCommittees.prototype, "candidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type_full" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "committeeTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], CandidatePrincipalCommittees.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation_full" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "designationFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], CandidatePrincipalCommittees.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_f1_date" }),
        __metadata("design:type", Date)
    ], CandidatePrincipalCommittees.prototype, "lastF1Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_file_date" }),
        __metadata("design:type", Date)
    ], CandidatePrincipalCommittees.prototype, "lastFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type_full" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "organizationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], CandidatePrincipalCommittees.prototype, "treasurerName", void 0);
    return CandidatePrincipalCommittees;
}(SpeakeasyBase));
export { CandidatePrincipalCommittees };
var Candidate = /** @class */ (function (_super) {
    __extends(Candidate, _super);
    function Candidate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_through" }),
        __metadata("design:type", Number)
    ], Candidate.prototype, "activeThrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_inactive" }),
        __metadata("design:type", Boolean)
    ], Candidate.prototype, "candidateInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_status" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "candidateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], Candidate.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district_number" }),
        __metadata("design:type", Number)
    ], Candidate.prototype, "districtNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_districts" }),
        __metadata("design:type", Array)
    ], Candidate.prototype, "electionDistricts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_years" }),
        __metadata("design:type", Array)
    ], Candidate.prototype, "electionYears", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], Candidate.prototype, "federalFundsFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], Candidate.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], Candidate.prototype, "hasRaisedFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inactive_election_years" }),
        __metadata("design:type", Array)
    ], Candidate.prototype, "inactiveElectionYears", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incumbent_challenge" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "incumbentChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "incumbentChallengeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_f2_date" }),
        __metadata("design:type", Date)
    ], Candidate.prototype, "lastF2Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_file_date" }),
        __metadata("design:type", Date)
    ], Candidate.prototype, "lastFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], Candidate.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_full" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "officeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal_committees", elemType: CandidatePrincipalCommittees }),
        __metadata("design:type", Array)
    ], Candidate.prototype, "principalCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Candidate.prototype, "state", void 0);
    return Candidate;
}(SpeakeasyBase));
export { Candidate };
