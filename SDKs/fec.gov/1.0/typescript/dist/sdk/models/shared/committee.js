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
var CommitteeSponsorCandidateList = /** @class */ (function (_super) {
    __extends(CommitteeSponsorCandidateList, _super);
    function CommitteeSponsorCandidateList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_id" }),
        __metadata("design:type", String)
    ], CommitteeSponsorCandidateList.prototype, "sponsorCandidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_name" }),
        __metadata("design:type", String)
    ], CommitteeSponsorCandidateList.prototype, "sponsorCandidateName", void 0);
    return CommitteeSponsorCandidateList;
}(SpeakeasyBase));
export { CommitteeSponsorCandidateList };
var Committee = /** @class */ (function (_super) {
    __extends(Committee, _super);
    function Committee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" }),
        __metadata("design:type", String)
    ], Committee.prototype, "affiliatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_ids" }),
        __metadata("design:type", Array)
    ], Committee.prototype, "candidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], Committee.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], Committee.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type_full" }),
        __metadata("design:type", String)
    ], Committee.prototype, "committeeTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], Committee.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], Committee.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation_full" }),
        __metadata("design:type", String)
    ], Committee.prototype, "designationFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency" }),
        __metadata("design:type", String)
    ], Committee.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], Committee.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_f1_date" }),
        __metadata("design:type", Date)
    ], Committee.prototype, "lastF1Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_file_date" }),
        __metadata("design:type", Date)
    ], Committee.prototype, "lastFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Committee.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type" }),
        __metadata("design:type", String)
    ], Committee.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type_full" }),
        __metadata("design:type", String)
    ], Committee.prototype, "organizationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], Committee.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], Committee.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" }),
        __metadata("design:type", Array)
    ], Committee.prototype, "sponsorCandidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_list", elemType: CommitteeSponsorCandidateList }),
        __metadata("design:type", Array)
    ], Committee.prototype, "sponsorCandidateList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Committee.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], Committee.prototype, "treasurerName", void 0);
    return Committee;
}(SpeakeasyBase));
export { Committee };
