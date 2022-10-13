package shared

import (
	"time"
)

type Electioneering struct {
	AmendmentIndicator       *string    `json:"amendment_indicator"`
	BeginningImageNumber     *string    `json:"beginning_image_number"`
	CalculatedCandidateShare *float64   `json:"calculated_candidate_share"`
	CandidateDistrict        *string    `json:"candidate_district"`
	CandidateID              *string    `json:"candidate_id"`
	CandidateName            *string    `json:"candidate_name"`
	CandidateOffice          *string    `json:"candidate_office"`
	CandidateState           *string    `json:"candidate_state"`
	CommitteeID              *string    `json:"committee_id"`
	CommitteeName            *string    `json:"committee_name"`
	CommunicationDate        *time.Time `json:"communication_date"`
	DisbursementAmount       *float64   `json:"disbursement_amount"`
	DisbursementDate         *time.Time `json:"disbursement_date"`
	ElectionType             *string    `json:"election_type"`
	FileNumber               *int32     `json:"file_number"`
	LinkID                   *int32     `json:"link_id"`
	NumberOfCandidates       *float64   `json:"number_of_candidates"`
	PayeeName                *string    `json:"payee_name"`
	PayeeState               *string    `json:"payee_state"`
	PdfURL                   *string    `json:"pdf_url"`
	PublicDistributionDate   *time.Time `json:"public_distribution_date"`
	PurposeDescription       *string    `json:"purpose_description"`
	ReceiptDate              *time.Time `json:"receipt_date"`
	ReportYear               *int32     `json:"report_year"`
	SbImageNum               *string    `json:"sb_image_num"`
	SbLinkID                 *string    `json:"sb_link_id"`
	SubID                    *int32     `json:"sub_id"`
}
