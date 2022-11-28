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
var PresidentialSummary = /** @class */ (function (_super) {
    __extends(PresidentialSummary, _super);
    function PresidentialSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_contributions_less_repayments" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "candidateContributionsLessRepayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_party_affiliation" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "candidatePartyAffiliation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_end" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "cashOnHandEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designation" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "committeeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], PresidentialSummary.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "debtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursements_less_offsets" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "disbursementsLessOffsets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_year" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "exemptLegalAccountingDisbursement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "federalFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundraising_disbursements" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "fundraisingDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_contributions_less_refunds" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "individualContributionsLessRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_receipts" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "netReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "offsetsToOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_expenditures" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "operatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_disbursements" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "otherDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pac_contributions_less_refunds" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "pacContributionsLessRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_contributions_less_refunds" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "partyContributionsLessRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "repaymentsLoansMadeByCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_other_loans" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "repaymentsOtherLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rounded_net_receipts" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "roundedNetReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contribution_refunds" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "totalContributionRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "totalLoanRepaymentsMade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committees" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "transfersFromAffiliatedCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committees" }),
        __metadata("design:type", Number)
    ], PresidentialSummary.prototype, "transfersToOtherAuthorizedCommittees", void 0);
    return PresidentialSummary;
}(SpeakeasyBase));
export { PresidentialSummary };
