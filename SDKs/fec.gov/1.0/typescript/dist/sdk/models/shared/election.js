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
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_election_year" }),
        __metadata("design:type", Number)
    ], Election.prototype, "candidateElectionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], Election.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], Election.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_pcc_id" }),
        __metadata("design:type", String)
    ], Election.prototype, "candidatePccId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_pcc_name" }),
        __metadata("design:type", String)
    ], Election.prototype, "candidatePccName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" }),
        __metadata("design:type", Number)
    ], Election.prototype, "cashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_ids" }),
        __metadata("design:type", Array)
    ], Election.prototype, "committeeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], Election.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" }),
        __metadata("design:type", String)
    ], Election.prototype, "incumbentChallengeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], Election.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_disbursements" }),
        __metadata("design:type", Number)
    ], Election.prototype, "totalDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_receipts" }),
        __metadata("design:type", Number)
    ], Election.prototype, "totalReceipts", void 0);
    return Election;
}(SpeakeasyBase));
export { Election };
