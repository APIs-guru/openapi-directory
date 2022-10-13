package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleCSubIDPathParams struct {
	SubID string `pathParam:"style=simple,explode=false,name=sub_id"`
}

type GetSchedulesScheduleCSubIDQueryParams struct {
	APIKey        string  `queryParam:"style=form,explode=true,name=api_key"`
	Page          *int32  `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32  `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool   `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool   `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool   `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleCSubIDRequest struct {
	PathParams  GetSchedulesScheduleCSubIDPathParams
	QueryParams GetSchedulesScheduleCSubIDQueryParams
}

type GetSchedulesScheduleCSubIDDefaultApplicationJSONResults struct {
	ActionCode               *string                  `json:"action_code"`
	ActionCodeFull           *string                  `json:"action_code_full"`
	CandidateFirstName       *string                  `json:"candidate_first_name"`
	CandidateID              *string                  `json:"candidate_id"`
	CandidateLastName        *string                  `json:"candidate_last_name"`
	CandidateMiddleName      *string                  `json:"candidate_middle_name"`
	CandidateName            *string                  `json:"candidate_name"`
	CandidateOffice          *string                  `json:"candidate_office"`
	CandidateOfficeDistrict  *string                  `json:"candidate_office_district"`
	CandidateOfficeFull      *string                  `json:"candidate_office_full"`
	CandidateOfficeState     *string                  `json:"candidate_office_state"`
	CandidateOfficeStateFull *string                  `json:"candidate_office_state_full"`
	CandidatePrefix          *string                  `json:"candidate_prefix"`
	CandidateSuffix          *string                  `json:"candidate_suffix"`
	Committee                *shared.CommitteeHistory `json:"committee"`
	CommitteeID              *string                  `json:"committee_id"`
	Cycle                    *int32                   `json:"cycle"`
	DueDateTerms             *string                  `json:"due_date_terms"`
	ElectionType             *string                  `json:"election_type"`
	ElectionTypeFull         *string                  `json:"election_type_full"`
	EntityType               *string                  `json:"entity_type"`
	EntityTypeFull           *string                  `json:"entity_type_full"`
	FecCommitteeID           *string                  `json:"fec_committee_id"`
	FecElectionTypeFull      *string                  `json:"fec_election_type_full"`
	FecElectionTypeYear      *string                  `json:"fec_election_type_year"`
	FileNumber               *int32                   `json:"file_number"`
	FilingForm               *string                  `json:"filing_form"`
	ImageNumber              *string                  `json:"image_number"`
	IncurredDate             *time.Time               `json:"incurred_date"`
	InterestRateTerms        *string                  `json:"interest_rate_terms"`
	LineNumber               *string                  `json:"line_number"`
	LinkID                   *int32                   `json:"link_id"`
	LoadDate                 *time.Time               `json:"load_date"`
	LoanBalance              *float32                 `json:"loan_balance"`
	LoanSourceCity           *string                  `json:"loan_source_city"`
	LoanSourceFirstName      *string                  `json:"loan_source_first_name"`
	LoanSourceLastName       *string                  `json:"loan_source_last_name"`
	LoanSourceMiddleName     *string                  `json:"loan_source_middle_name"`
	LoanSourceName           *string                  `json:"loan_source_name"`
	LoanSourcePrefix         *string                  `json:"loan_source_prefix"`
	LoanSourceState          *string                  `json:"loan_source_state"`
	LoanSourceStreet1        *string                  `json:"loan_source_street_1"`
	LoanSourceStreet2        *string                  `json:"loan_source_street_2"`
	LoanSourceSuffix         *string                  `json:"loan_source_suffix"`
	LoanSourceZip            *int32                   `json:"loan_source_zip"`
	MemoCode                 *string                  `json:"memo_code"`
	MemoText                 *string                  `json:"memo_text"`
	OriginalLoanAmount       *float32                 `json:"original_loan_amount"`
	OriginalSubID            *int32                   `json:"original_sub_id"`
	PaymentToDate            *float32                 `json:"payment_to_date"`
	PdfURL                   *string                  `json:"pdf_url"`
	PersonallyFunded         *string                  `json:"personally_funded"`
	ReportType               *string                  `json:"report_type"`
	ReportYear               *int32                   `json:"report_year"`
	ScheduleALineNumber      *int32                   `json:"schedule_a_line_number"`
	ScheduleType             *string                  `json:"schedule_type"`
	ScheduleTypeFull         *string                  `json:"schedule_type_full"`
	SecuredInd               *string                  `json:"secured_ind"`
	SubID                    *string                  `json:"sub_id"`
	TransactionID            *string                  `json:"transaction_id"`
}

type GetSchedulesScheduleCSubIDDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo                                        `json:"pagination"`
	Results    []GetSchedulesScheduleCSubIDDefaultApplicationJSONResults `json:"results"`
}

type GetSchedulesScheduleCSubIDResponse struct {
	ContentType                                            string
	GetSchedulesScheduleCSubIDDefaultApplicationJSONObject *GetSchedulesScheduleCSubIDDefaultApplicationJSON
	StatusCode                                             int64
}
