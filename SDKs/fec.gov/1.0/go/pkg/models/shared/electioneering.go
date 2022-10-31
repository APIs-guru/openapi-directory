package shared

import (
"time")

type Electioneering struct {
    AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CalculatedCandidateShare *float64 `json:"calculated_candidate_share,omitempty"`
    CandidateDistrict *string `json:"candidate_district,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateName *string `json:"candidate_name,omitempty"`
    CandidateOffice *string `json:"candidate_office,omitempty"`
    CandidateState *string `json:"candidate_state,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CommunicationDate *time.Time `json:"communication_date,omitempty"`
    DisbursementAmount *float64 `json:"disbursement_amount,omitempty"`
    DisbursementDate *time.Time `json:"disbursement_date,omitempty"`
    ElectionType *string `json:"election_type,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    LinkID *int32 `json:"link_id,omitempty"`
    NumberOfCandidates *float64 `json:"number_of_candidates,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    PayeeState *string `json:"payee_state,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    PublicDistributionDate *time.Time `json:"public_distribution_date,omitempty"`
    PurposeDescription *string `json:"purpose_description,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    SbImageNum *string `json:"sb_image_num,omitempty"`
    SbLinkID *string `json:"sb_link_id,omitempty"`
    SubID *int32 `json:"sub_id,omitempty"`
    
}

