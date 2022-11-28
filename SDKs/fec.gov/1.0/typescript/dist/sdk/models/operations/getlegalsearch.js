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
export var GetLegalSearchAoCategoryEnum;
(function (GetLegalSearchAoCategoryEnum) {
    GetLegalSearchAoCategoryEnum["F"] = "F";
    GetLegalSearchAoCategoryEnum["V"] = "V";
    GetLegalSearchAoCategoryEnum["D"] = "D";
    GetLegalSearchAoCategoryEnum["R"] = "R";
    GetLegalSearchAoCategoryEnum["W"] = "W";
    GetLegalSearchAoCategoryEnum["C"] = "C";
    GetLegalSearchAoCategoryEnum["S"] = "S";
})(GetLegalSearchAoCategoryEnum || (GetLegalSearchAoCategoryEnum = {}));
var GetLegalSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetLegalSearchQueryParams, _super);
    function GetLegalSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_committee_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "afCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_fd_fine_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchQueryParams.prototype, "afFdFineAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_max_fd_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "afMaxFdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_max_rtb_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "afMaxRtbDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_min_fd_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "afMinFdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_min_rtb_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "afMinRtbDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_name" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "afName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_report_year" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "afReportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=af_rtb_fine_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchQueryParams.prototype, "afRtbFineAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_category" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_citation_require_all" }),
        __metadata("design:type", Boolean)
    ], GetLegalSearchQueryParams.prototype, "aoCitationRequireAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_entity_name" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoEntityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_is_pending" }),
        __metadata("design:type", Boolean)
    ], GetLegalSearchQueryParams.prototype, "aoIsPending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_max_issue_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "aoMaxIssueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_max_request_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "aoMaxRequestDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_min_issue_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "aoMinIssueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_min_request_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "aoMinRequestDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_name" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_no" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_regulatory_citation" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoRegulatoryCitation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_requestor" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "aoRequestor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_requestor_type" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoRequestorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_status" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "aoStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ao_statutory_citation" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "aoStatutoryCitation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_dispositions" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "caseDispositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_document_category" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "caseDocumentCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_election_cycles" }),
        __metadata("design:type", Number)
    ], GetLegalSearchQueryParams.prototype, "caseElectionCycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_max_close_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "caseMaxCloseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_max_open_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "caseMaxOpenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_min_close_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "caseMinCloseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_min_open_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchQueryParams.prototype, "caseMinOpenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_no" }),
        __metadata("design:type", Array)
    ], GetLegalSearchQueryParams.prototype, "caseNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=case_respondents" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "caseRespondents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_hit" }),
        __metadata("design:type", Number)
    ], GetLegalSearchQueryParams.prototype, "fromHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hits_returned" }),
        __metadata("design:type", Number)
    ], GetLegalSearchQueryParams.prototype, "hitsReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mur_type" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "murType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetLegalSearchQueryParams.prototype, "type", void 0);
    return GetLegalSearchQueryParams;
}(SpeakeasyBase));
export { GetLegalSearchQueryParams };
var GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes, _super);
    function GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vote_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes.prototype, "voteDate", void 0);
    return GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes };
var GetLegalSearchDefaultApplicationJsonAdminFinesDocuments = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdminFinesDocuments, _super);
    function GetLegalSearchDefaultApplicationJsonAdminFinesDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "documentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_id" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFinesDocuments.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdminFinesDocuments;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdminFinesDocuments };
var GetLegalSearchDefaultApplicationJsonAdminFines = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdminFines, _super);
    function GetLegalSearchDefaultApplicationJsonAdminFines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge_outcome" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "challengeOutcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge_receipt_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "challengeReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "checkAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "commissionVotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdminFinesDocuments }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=final_determination_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "finalDeterminationAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=final_determination_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "finalDeterminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petition_court_decision_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "petitionCourtDecisionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petition_court_filing_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "petitionCourtFilingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason_to_believe_action_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "reasonToBelieveActionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason_to_believe_fine_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "reasonToBelieveFineAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasury_referral_amount" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "treasuryReferralAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasury_referral_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "treasuryReferralDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdminFines.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdminFines;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdminFines };
var GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes, _super);
    function GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vote_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes.prototype, "voteDate", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes };
var GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations, _super);
    function GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations };
var GetLegalSearchDefaultApplicationJsonAdrsDispositions = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrsDispositions, _super);
    function GetLegalSearchDefaultApplicationJsonAdrsDispositions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=citations", elemType: GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositions.prototype, "citations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disposition" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositions.prototype, "disposition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=penalty" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositions.prototype, "penalty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respondent" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDispositions.prototype, "respondent", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrsDispositions;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrsDispositions };
var GetLegalSearchDefaultApplicationJsonAdrsDocuments = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrsDocuments, _super);
    function GetLegalSearchDefaultApplicationJsonAdrsDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "documentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_id" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsDocuments.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrsDocuments;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrsDocuments };
var GetLegalSearchDefaultApplicationJsonAdrsParticipants = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrsParticipants, _super);
    function GetLegalSearchDefaultApplicationJsonAdrsParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=citations" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonAdrsParticipants.prototype, "citations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsParticipants.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrsParticipants.prototype, "role", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrsParticipants;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrsParticipants };
var GetLegalSearchDefaultApplicationJsonAdrs = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdrs, _super);
    function GetLegalSearchDefaultApplicationJsonAdrs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "closeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "commissionVotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispositions", elemType: GetLegalSearchDefaultApplicationJsonAdrsDispositions }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "dispositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdrsDocuments }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycles" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "electionCycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "openDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: GetLegalSearchDefaultApplicationJsonAdrsParticipants }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respondents" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "respondents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjects" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "subjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdrs.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdrs;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdrs };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations.prototype, "no", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy.prototype, "no", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_id" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities.prototype, "type", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=part" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations.prototype, "title", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations.prototype, "title", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations };
var GetLegalSearchDefaultApplicationJsonAdvisoryOpinions = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonAdvisoryOpinions, _super);
    function GetLegalSearchDefaultApplicationJsonAdvisoryOpinions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ao_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "aoCitations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aos_cited_by", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "aosCitedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commenter_names" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "commenterNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_pending" }),
        __metadata("design:type", Boolean)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "isPending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regulatory_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "regulatoryCitations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=representative_names" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "representativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "requestDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestor_names" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "requestorNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestor_types" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "requestorTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statutory_citations", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "statutoryCitations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonAdvisoryOpinions.prototype, "summary", void 0);
    return GetLegalSearchDefaultApplicationJsonAdvisoryOpinions;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonAdvisoryOpinions };
var GetLegalSearchDefaultApplicationJsonMursCommissionVotes = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMursCommissionVotes, _super);
    function GetLegalSearchDefaultApplicationJsonMursCommissionVotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursCommissionVotes.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vote_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonMursCommissionVotes.prototype, "voteDate", void 0);
    return GetLegalSearchDefaultApplicationJsonMursCommissionVotes;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMursCommissionVotes };
var GetLegalSearchDefaultApplicationJsonMursDispositionsCitations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMursDispositionsCitations, _super);
    function GetLegalSearchDefaultApplicationJsonMursDispositionsCitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositionsCitations.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositionsCitations.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositionsCitations.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositionsCitations.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonMursDispositionsCitations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMursDispositionsCitations };
var GetLegalSearchDefaultApplicationJsonMursDispositions = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMursDispositions, _super);
    function GetLegalSearchDefaultApplicationJsonMursDispositions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=citations", elemType: GetLegalSearchDefaultApplicationJsonMursDispositionsCitations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMursDispositions.prototype, "citations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disposition" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositions.prototype, "disposition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=penalty" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonMursDispositions.prototype, "penalty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respondent" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDispositions.prototype, "respondent", void 0);
    return GetLegalSearchDefaultApplicationJsonMursDispositions;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMursDispositions };
var GetLegalSearchDefaultApplicationJsonMursDocuments = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMursDocuments, _super);
    function GetLegalSearchDefaultApplicationJsonMursDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "documentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_id" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursDocuments.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonMursDocuments;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMursDocuments };
export var GetLegalSearchDefaultApplicationJsonMursMurTypeEnum;
(function (GetLegalSearchDefaultApplicationJsonMursMurTypeEnum) {
    GetLegalSearchDefaultApplicationJsonMursMurTypeEnum["Current"] = "current";
    GetLegalSearchDefaultApplicationJsonMursMurTypeEnum["Archived"] = "archived";
})(GetLegalSearchDefaultApplicationJsonMursMurTypeEnum || (GetLegalSearchDefaultApplicationJsonMursMurTypeEnum = {}));
var GetLegalSearchDefaultApplicationJsonMursParticipants = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMursParticipants, _super);
    function GetLegalSearchDefaultApplicationJsonMursParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=citations" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonMursParticipants.prototype, "citations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursParticipants.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMursParticipants.prototype, "role", void 0);
    return GetLegalSearchDefaultApplicationJsonMursParticipants;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMursParticipants };
var GetLegalSearchDefaultApplicationJsonMurs = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonMurs, _super);
    function GetLegalSearchDefaultApplicationJsonMurs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "closeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commission_votes", elemType: GetLegalSearchDefaultApplicationJsonMursCommissionVotes }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "commissionVotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispositions", elemType: GetLegalSearchDefaultApplicationJsonMursDispositions }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "dispositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GetLegalSearchDefaultApplicationJsonMursDocuments }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycles" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "electionCycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mur_type" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "murType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_date" }),
        __metadata("design:type", Date)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "openDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: GetLegalSearchDefaultApplicationJsonMursParticipants }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respondents" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "respondents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjects" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "subjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonMurs.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonMurs;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonMurs };
var GetLegalSearchDefaultApplicationJsonRegulations = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonRegulations, _super);
    function GetLegalSearchDefaultApplicationJsonRegulations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonRegulations.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonRegulations;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonRegulations };
var GetLegalSearchDefaultApplicationJsonStatutes = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJsonStatutes, _super);
    function GetLegalSearchDefaultApplicationJsonStatutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chapter" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "chapter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_highlights" }),
        __metadata("design:type", Map)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "documentHighlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highlights" }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "highlights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "no", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLegalSearchDefaultApplicationJsonStatutes.prototype, "url", void 0);
    return GetLegalSearchDefaultApplicationJsonStatutes;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJsonStatutes };
var GetLegalSearchDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLegalSearchDefaultApplicationJson, _super);
    function GetLegalSearchDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_fines", elemType: GetLegalSearchDefaultApplicationJsonAdminFines }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "adminFines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adrs", elemType: GetLegalSearchDefaultApplicationJsonAdrs }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "adrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advisory_opinions", elemType: GetLegalSearchDefaultApplicationJsonAdvisoryOpinions }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "advisoryOpinions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=murs", elemType: GetLegalSearchDefaultApplicationJsonMurs }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "murs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regulations", elemType: GetLegalSearchDefaultApplicationJsonRegulations }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "regulations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statutes", elemType: GetLegalSearchDefaultApplicationJsonStatutes }),
        __metadata("design:type", Array)
    ], GetLegalSearchDefaultApplicationJson.prototype, "statutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_admin_fines" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalAdminFines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_adrs" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalAdrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_advisory_opinions" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalAdvisoryOpinions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_all" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_murs" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalMurs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_regulations" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalRegulations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_statutes" }),
        __metadata("design:type", Number)
    ], GetLegalSearchDefaultApplicationJson.prototype, "totalStatutes", void 0);
    return GetLegalSearchDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLegalSearchDefaultApplicationJson };
var GetLegalSearchRequest = /** @class */ (function (_super) {
    __extends(GetLegalSearchRequest, _super);
    function GetLegalSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLegalSearchQueryParams)
    ], GetLegalSearchRequest.prototype, "queryParams", void 0);
    return GetLegalSearchRequest;
}(SpeakeasyBase));
export { GetLegalSearchRequest };
var GetLegalSearchResponse = /** @class */ (function (_super) {
    __extends(GetLegalSearchResponse, _super);
    function GetLegalSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLegalSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLegalSearchDefaultApplicationJson)
    ], GetLegalSearchResponse.prototype, "getLegalSearchDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLegalSearchResponse.prototype, "statusCode", void 0);
    return GetLegalSearchResponse;
}(SpeakeasyBase));
export { GetLegalSearchResponse };
