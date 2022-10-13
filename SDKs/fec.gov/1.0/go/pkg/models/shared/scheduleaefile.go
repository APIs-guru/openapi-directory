package shared

import (
	"time"
)

type ScheduleAEfile struct {
	AmendmentIndicator         *string           `json:"amendment_indicator"`
	BackReferenceScheduleName  *string           `json:"back_reference_schedule_name"`
	BackReferenceTransactionID *string           `json:"back_reference_transaction_id"`
	BeginningImageNumber       *string           `json:"beginning_image_number"`
	Committee                  *CommitteeHistory `json:"committee"`
	CommitteeID                *string           `json:"committee_id"`
	ConduitCommitteeCity       *string           `json:"conduit_committee_city"`
	ConduitCommitteeID         *string           `json:"conduit_committee_id"`
	ConduitCommitteeName       *string           `json:"conduit_committee_name"`
	ConduitCommitteeState      *string           `json:"conduit_committee_state"`
	ConduitCommitteeStreet1    *string           `json:"conduit_committee_street1"`
	ConduitCommitteeStreet2    *string           `json:"conduit_committee_street2"`
	ConduitCommitteeZip        *int32            `json:"conduit_committee_zip"`
	ContributionReceiptAmount  *float64          `json:"contribution_receipt_amount"`
	ContributionReceiptDate    *time.Time        `json:"contribution_receipt_date"`
	ContributorAggregateYtd    *float64          `json:"contributor_aggregate_ytd"`
	ContributorCity            *string           `json:"contributor_city"`
	ContributorEmployer        *string           `json:"contributor_employer"`
	ContributorFirstName       *string           `json:"contributor_first_name"`
	ContributorLastName        *string           `json:"contributor_last_name"`
	ContributorMiddleName      *string           `json:"contributor_middle_name"`
	ContributorName            *string           `json:"contributor_name"`
	ContributorOccupation      *string           `json:"contributor_occupation"`
	ContributorPrefix          *string           `json:"contributor_prefix"`
	ContributorState           *string           `json:"contributor_state"`
	ContributorSuffix          *string           `json:"contributor_suffix"`
	ContributorZip             *string           `json:"contributor_zip"`
	CsvURL                     *string           `json:"csv_url"`
	Cycle                      *int32            `json:"cycle"`
	EntityType                 *string           `json:"entity_type"`
	FecElectionTypeDesc        *string           `json:"fec_election_type_desc"`
	FecURL                     *string           `json:"fec_url"`
	FileNumber                 int32             `json:"file_number"`
	Filing                     *EFilings         `json:"filing"`
	ImageNumber                *string           `json:"image_number"`
	LineNumber                 *string           `json:"line_number"`
	LoadTimestamp              *time.Time        `json:"load_timestamp"`
	MemoCode                   *string           `json:"memo_code"`
	MemoText                   *string           `json:"memo_text"`
	PdfURL                     *string           `json:"pdf_url"`
	Pgo                        *string           `json:"pgo"`
	RelatedLineNumber          int32             `json:"related_line_number"`
	ReportType                 *string           `json:"report_type"`
	TransactionID              *string           `json:"transaction_id"`
}
