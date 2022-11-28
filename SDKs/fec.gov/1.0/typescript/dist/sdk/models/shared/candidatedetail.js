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
var CandidateDetail = /** @class */ (function (_super) {
    __extends(CandidateDetail, _super);
    function CandidateDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_through" }),
        __metadata("design:type", Number)
    ], CandidateDetail.prototype, "activeThrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_city" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "addressCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_state" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "addressState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_street_1" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "addressStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_street_2" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "addressStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_zip" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "addressZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_inactive" }),
        __metadata("design:type", Boolean)
    ], CandidateDetail.prototype, "candidateInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_status" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "candidateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], CandidateDetail.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district_number" }),
        __metadata("design:type", Number)
    ], CandidateDetail.prototype, "districtNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_districts" }),
        __metadata("design:type", Array)
    ], CandidateDetail.prototype, "electionDistricts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_years" }),
        __metadata("design:type", Array)
    ], CandidateDetail.prototype, "electionYears", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], CandidateDetail.prototype, "federalFundsFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], CandidateDetail.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flags" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "flags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], CandidateDetail.prototype, "hasRaisedFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incumbent_challenge" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "incumbentChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "incumbentChallengeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_f2_date" }),
        __metadata("design:type", Date)
    ], CandidateDetail.prototype, "lastF2Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_file_date" }),
        __metadata("design:type", Date)
    ], CandidateDetail.prototype, "lastFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], CandidateDetail.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_full" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "officeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CandidateDetail.prototype, "state", void 0);
    return CandidateDetail;
}(SpeakeasyBase));
export { CandidateDetail };
