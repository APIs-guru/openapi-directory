package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleFSubIDPathParams struct {
	SubID string `pathParam:"style=simple,explode=false,name=sub_id"`
}

type GetSchedulesScheduleFSubIDQueryParams struct {
	APIKey  string `queryParam:"style=form,explode=true,name=api_key"`
	Page    *int32 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetSchedulesScheduleFSubIDRequest struct {
	PathParams  GetSchedulesScheduleFSubIDPathParams
	QueryParams GetSchedulesScheduleFSubIDQueryParams
}

type GetSchedulesScheduleFSubIDDefaultApplicationJSONResults struct {
	ActionCode                                         *string                  `json:"action_code,omitempty"`
	ActionCodeFull                                     *string                  `json:"action_code_full,omitempty"`
	AggregateGeneralElectionExpenditure                *string                  `json:"aggregate_general_election_expenditure,omitempty"`
	BackReferenceScheduleName                          *string                  `json:"back_reference_schedule_name,omitempty"`
	BackReferenceTransactionID                         *string                  `json:"back_reference_transaction_id,omitempty"`
	CandidateFirstName                                 *string                  `json:"candidate_first_name,omitempty"`
	CandidateID                                        *string                  `json:"candidate_id,omitempty"`
	CandidateLastName                                  *string                  `json:"candidate_last_name,omitempty"`
	CandidateMiddleName                                *string                  `json:"candidate_middle_name,omitempty"`
	CandidateName                                      *string                  `json:"candidate_name,omitempty"`
	CandidateOffice                                    *string                  `json:"candidate_office,omitempty"`
	CandidateOfficeDistrict                            *string                  `json:"candidate_office_district,omitempty"`
	CandidateOfficeFull                                *string                  `json:"candidate_office_full,omitempty"`
	CandidateOfficeState                               *string                  `json:"candidate_office_state,omitempty"`
	CandidateOfficeStateFull                           *string                  `json:"candidate_office_state_full,omitempty"`
	CandidatePrefix                                    *string                  `json:"candidate_prefix,omitempty"`
	CandidateSuffix                                    *string                  `json:"candidate_suffix,omitempty"`
	CatologCode                                        *string                  `json:"catolog_code,omitempty"`
	CatologCodeFull                                    *string                  `json:"catolog_code_full,omitempty"`
	Committee                                          *shared.CommitteeHistory `json:"committee,omitempty"`
	CommitteeDesignatedCoordinatedExpenditureIndicator *string                  `json:"committee_designated_coordinated_expenditure_indicator,omitempty"`
	CommitteeID                                        *string                  `json:"committee_id,omitempty"`
	CommitteeName                                      *string                  `json:"committee_name,omitempty"`
	ConduitCommitteeCity                               *string                  `json:"conduit_committee_city,omitempty"`
	ConduitCommitteeID                                 *string                  `json:"conduit_committee_id,omitempty"`
	ConduitCommitteeName                               *string                  `json:"conduit_committee_name,omitempty"`
	ConduitCommitteeState                              *string                  `json:"conduit_committee_state,omitempty"`
	ConduitCommitteeStreet1                            *string                  `json:"conduit_committee_street1,omitempty"`
	ConduitCommitteeStreet2                            *string                  `json:"conduit_committee_street2,omitempty"`
	ConduitCommitteeZip                                *int32                   `json:"conduit_committee_zip,omitempty"`
	DesignatedCommitteeID                              *string                  `json:"designated_committee_id,omitempty"`
	DesignatedCommitteeName                            *string                  `json:"designated_committee_name,omitempty"`
	ElectionCycle                                      *int32                   `json:"election_cycle,omitempty"`
	EntityType                                         *string                  `json:"entity_type,omitempty"`
	EntityTypeDesc                                     *string                  `json:"entity_type_desc,omitempty"`
	ExpenditureAmount                                  *int32                   `json:"expenditure_amount,omitempty"`
	ExpenditureDate                                    *time.Time               `json:"expenditure_date,omitempty"`
	ExpenditurePurposeFull                             *string                  `json:"expenditure_purpose_full,omitempty"`
	ExpenditureType                                    *string                  `json:"expenditure_type,omitempty"`
	ExpenditureTypeFull                                *string                  `json:"expenditure_type_full,omitempty"`
	FileNumber                                         *int32                   `json:"file_number,omitempty"`
	FilingForm                                         *string                  `json:"filing_form,omitempty"`
	ImageNumber                                        *string                  `json:"image_number,omitempty"`
	LineNumber                                         *string                  `json:"line_number,omitempty"`
	LinkID                                             *int32                   `json:"link_id,omitempty"`
	LoadDate                                           *time.Time               `json:"load_date,omitempty"`
	MemoCode                                           *string                  `json:"memo_code,omitempty"`
	MemoCodeFull                                       *string                  `json:"memo_code_full,omitempty"`
	MemoText                                           *string                  `json:"memo_text,omitempty"`
	OriginalSubID                                      *int32                   `json:"original_sub_id,omitempty"`
	PayeeFirstName                                     *string                  `json:"payee_first_name,omitempty"`
	PayeeLastName                                      *string                  `json:"payee_last_name,omitempty"`
	PayeeMiddleName                                    *string                  `json:"payee_middle_name,omitempty"`
	PayeeName                                          *string                  `json:"payee_name,omitempty"`
	PdfURL                                             *string                  `json:"pdf_url,omitempty"`
	ReportType                                         *string                  `json:"report_type,omitempty"`
	ReportYear                                         *int32                   `json:"report_year,omitempty"`
	ScheduleType                                       *string                  `json:"schedule_type,omitempty"`
	ScheduleTypeFull                                   *string                  `json:"schedule_type_full,omitempty"`
	SubID                                              *string                  `json:"sub_id,omitempty"`
	SubordinateCommittee                               *shared.CommitteeHistory `json:"subordinate_committee,omitempty"`
	SubordinateCommitteeID                             *string                  `json:"subordinate_committee_id,omitempty"`
	TransactionID                                      *string                  `json:"transaction_id,omitempty"`
	UnlimitedSpendingFlag                              *string                  `json:"unlimited_spending_flag,omitempty"`
	UnlimitedSpendingFlagFull                          *string                  `json:"unlimited_spending_flag_full,omitempty"`
}

type GetSchedulesScheduleFSubIDDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo                                        `json:"pagination,omitempty"`
	Results    []GetSchedulesScheduleFSubIDDefaultApplicationJSONResults `json:"results,omitempty"`
}

type GetSchedulesScheduleFSubIDResponse struct {
	ContentType                                            string
	GetSchedulesScheduleFSubIDDefaultApplicationJSONObject *GetSchedulesScheduleFSubIDDefaultApplicationJSON
	StatusCode                                             int64
}
