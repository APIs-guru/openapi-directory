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
	ActionCode                                         *string                  `json:"action_code"`
	ActionCodeFull                                     *string                  `json:"action_code_full"`
	AggregateGeneralElectionExpenditure                *string                  `json:"aggregate_general_election_expenditure"`
	BackReferenceScheduleName                          *string                  `json:"back_reference_schedule_name"`
	BackReferenceTransactionID                         *string                  `json:"back_reference_transaction_id"`
	CandidateFirstName                                 *string                  `json:"candidate_first_name"`
	CandidateID                                        *string                  `json:"candidate_id"`
	CandidateLastName                                  *string                  `json:"candidate_last_name"`
	CandidateMiddleName                                *string                  `json:"candidate_middle_name"`
	CandidateName                                      *string                  `json:"candidate_name"`
	CandidateOffice                                    *string                  `json:"candidate_office"`
	CandidateOfficeDistrict                            *string                  `json:"candidate_office_district"`
	CandidateOfficeFull                                *string                  `json:"candidate_office_full"`
	CandidateOfficeState                               *string                  `json:"candidate_office_state"`
	CandidateOfficeStateFull                           *string                  `json:"candidate_office_state_full"`
	CandidatePrefix                                    *string                  `json:"candidate_prefix"`
	CandidateSuffix                                    *string                  `json:"candidate_suffix"`
	CatologCode                                        *string                  `json:"catolog_code"`
	CatologCodeFull                                    *string                  `json:"catolog_code_full"`
	Committee                                          *shared.CommitteeHistory `json:"committee"`
	CommitteeDesignatedCoordinatedExpenditureIndicator *string                  `json:"committee_designated_coordinated_expenditure_indicator"`
	CommitteeID                                        *string                  `json:"committee_id"`
	CommitteeName                                      *string                  `json:"committee_name"`
	ConduitCommitteeCity                               *string                  `json:"conduit_committee_city"`
	ConduitCommitteeID                                 *string                  `json:"conduit_committee_id"`
	ConduitCommitteeName                               *string                  `json:"conduit_committee_name"`
	ConduitCommitteeState                              *string                  `json:"conduit_committee_state"`
	ConduitCommitteeStreet1                            *string                  `json:"conduit_committee_street1"`
	ConduitCommitteeStreet2                            *string                  `json:"conduit_committee_street2"`
	ConduitCommitteeZip                                *int32                   `json:"conduit_committee_zip"`
	DesignatedCommitteeID                              *string                  `json:"designated_committee_id"`
	DesignatedCommitteeName                            *string                  `json:"designated_committee_name"`
	ElectionCycle                                      *int32                   `json:"election_cycle"`
	EntityType                                         *string                  `json:"entity_type"`
	EntityTypeDesc                                     *string                  `json:"entity_type_desc"`
	ExpenditureAmount                                  *int32                   `json:"expenditure_amount"`
	ExpenditureDate                                    *time.Time               `json:"expenditure_date"`
	ExpenditurePurposeFull                             *string                  `json:"expenditure_purpose_full"`
	ExpenditureType                                    *string                  `json:"expenditure_type"`
	ExpenditureTypeFull                                *string                  `json:"expenditure_type_full"`
	FileNumber                                         *int32                   `json:"file_number"`
	FilingForm                                         *string                  `json:"filing_form"`
	ImageNumber                                        *string                  `json:"image_number"`
	LineNumber                                         *string                  `json:"line_number"`
	LinkID                                             *int32                   `json:"link_id"`
	LoadDate                                           *time.Time               `json:"load_date"`
	MemoCode                                           *string                  `json:"memo_code"`
	MemoCodeFull                                       *string                  `json:"memo_code_full"`
	MemoText                                           *string                  `json:"memo_text"`
	OriginalSubID                                      *int32                   `json:"original_sub_id"`
	PayeeFirstName                                     *string                  `json:"payee_first_name"`
	PayeeLastName                                      *string                  `json:"payee_last_name"`
	PayeeMiddleName                                    *string                  `json:"payee_middle_name"`
	PayeeName                                          *string                  `json:"payee_name"`
	PdfURL                                             *string                  `json:"pdf_url"`
	ReportType                                         *string                  `json:"report_type"`
	ReportYear                                         *int32                   `json:"report_year"`
	ScheduleType                                       *string                  `json:"schedule_type"`
	ScheduleTypeFull                                   *string                  `json:"schedule_type_full"`
	SubID                                              *string                  `json:"sub_id"`
	SubordinateCommittee                               *shared.CommitteeHistory `json:"subordinate_committee"`
	SubordinateCommitteeID                             *string                  `json:"subordinate_committee_id"`
	TransactionID                                      *string                  `json:"transaction_id"`
	UnlimitedSpendingFlag                              *string                  `json:"unlimited_spending_flag"`
	UnlimitedSpendingFlagFull                          *string                  `json:"unlimited_spending_flag_full"`
}

type GetSchedulesScheduleFSubIDDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo                                        `json:"pagination"`
	Results    []GetSchedulesScheduleFSubIDDefaultApplicationJSONResults `json:"results"`
}

type GetSchedulesScheduleFSubIDResponse struct {
	ContentType                                            string
	GetSchedulesScheduleFSubIDDefaultApplicationJSONObject *GetSchedulesScheduleFSubIDDefaultApplicationJSON
	StatusCode                                             int64
}
