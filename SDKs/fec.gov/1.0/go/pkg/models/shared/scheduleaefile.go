package shared

import (
"time")

type ScheduleAEfile struct {
    AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
    BackReferenceScheduleName *string `json:"back_reference_schedule_name,omitempty"`
    BackReferenceTransactionID *string `json:"back_reference_transaction_id,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    Committee *CommitteeHistory `json:"committee,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    ConduitCommitteeCity *string `json:"conduit_committee_city,omitempty"`
    ConduitCommitteeID *string `json:"conduit_committee_id,omitempty"`
    ConduitCommitteeName *string `json:"conduit_committee_name,omitempty"`
    ConduitCommitteeState *string `json:"conduit_committee_state,omitempty"`
    ConduitCommitteeStreet1 *string `json:"conduit_committee_street1,omitempty"`
    ConduitCommitteeStreet2 *string `json:"conduit_committee_street2,omitempty"`
    ConduitCommitteeZip *int32 `json:"conduit_committee_zip,omitempty"`
    ContributionReceiptAmount *float64 `json:"contribution_receipt_amount,omitempty"`
    ContributionReceiptDate *time.Time `json:"contribution_receipt_date,omitempty"`
    ContributorAggregateYtd *float64 `json:"contributor_aggregate_ytd,omitempty"`
    ContributorCity *string `json:"contributor_city,omitempty"`
    ContributorEmployer *string `json:"contributor_employer,omitempty"`
    ContributorFirstName *string `json:"contributor_first_name,omitempty"`
    ContributorLastName *string `json:"contributor_last_name,omitempty"`
    ContributorMiddleName *string `json:"contributor_middle_name,omitempty"`
    ContributorName *string `json:"contributor_name,omitempty"`
    ContributorOccupation *string `json:"contributor_occupation,omitempty"`
    ContributorPrefix *string `json:"contributor_prefix,omitempty"`
    ContributorState *string `json:"contributor_state,omitempty"`
    ContributorSuffix *string `json:"contributor_suffix,omitempty"`
    ContributorZip *string `json:"contributor_zip,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    EntityType *string `json:"entity_type,omitempty"`
    FecElectionTypeDesc *string `json:"fec_election_type_desc,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber int32 `json:"file_number"`
    Filing *EFilings `json:"filing,omitempty"`
    ImageNumber *string `json:"image_number,omitempty"`
    LineNumber *string `json:"line_number,omitempty"`
    LoadTimestamp *time.Time `json:"load_timestamp,omitempty"`
    MemoCode *string `json:"memo_code,omitempty"`
    MemoText *string `json:"memo_text,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    Pgo *string `json:"pgo,omitempty"`
    RelatedLineNumber int32 `json:"related_line_number"`
    ReportType *string `json:"report_type,omitempty"`
    TransactionID *string `json:"transaction_id,omitempty"`
    
}

