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
	ActionCode               *string                  `json:"action_code,omitempty"`
	ActionCodeFull           *string                  `json:"action_code_full,omitempty"`
	CandidateFirstName       *string                  `json:"candidate_first_name,omitempty"`
	CandidateID              *string                  `json:"candidate_id,omitempty"`
	CandidateLastName        *string                  `json:"candidate_last_name,omitempty"`
	CandidateMiddleName      *string                  `json:"candidate_middle_name,omitempty"`
	CandidateName            *string                  `json:"candidate_name,omitempty"`
	CandidateOffice          *string                  `json:"candidate_office,omitempty"`
	CandidateOfficeDistrict  *string                  `json:"candidate_office_district,omitempty"`
	CandidateOfficeFull      *string                  `json:"candidate_office_full,omitempty"`
	CandidateOfficeState     *string                  `json:"candidate_office_state,omitempty"`
	CandidateOfficeStateFull *string                  `json:"candidate_office_state_full,omitempty"`
	CandidatePrefix          *string                  `json:"candidate_prefix,omitempty"`
	CandidateSuffix          *string                  `json:"candidate_suffix,omitempty"`
	Committee                *shared.CommitteeHistory `json:"committee,omitempty"`
	CommitteeID              *string                  `json:"committee_id,omitempty"`
	Cycle                    *int32                   `json:"cycle,omitempty"`
	DueDateTerms             *string                  `json:"due_date_terms,omitempty"`
	ElectionType             *string                  `json:"election_type,omitempty"`
	ElectionTypeFull         *string                  `json:"election_type_full,omitempty"`
	EntityType               *string                  `json:"entity_type,omitempty"`
	EntityTypeFull           *string                  `json:"entity_type_full,omitempty"`
	FecCommitteeID           *string                  `json:"fec_committee_id,omitempty"`
	FecElectionTypeFull      *string                  `json:"fec_election_type_full,omitempty"`
	FecElectionTypeYear      *string                  `json:"fec_election_type_year,omitempty"`
	FileNumber               *int32                   `json:"file_number,omitempty"`
	FilingForm               *string                  `json:"filing_form,omitempty"`
	ImageNumber              *string                  `json:"image_number,omitempty"`
	IncurredDate             *time.Time               `json:"incurred_date,omitempty"`
	InterestRateTerms        *string                  `json:"interest_rate_terms,omitempty"`
	LineNumber               *string                  `json:"line_number,omitempty"`
	LinkID                   *int32                   `json:"link_id,omitempty"`
	LoadDate                 *time.Time               `json:"load_date,omitempty"`
	LoanBalance              *float32                 `json:"loan_balance,omitempty"`
	LoanSourceCity           *string                  `json:"loan_source_city,omitempty"`
	LoanSourceFirstName      *string                  `json:"loan_source_first_name,omitempty"`
	LoanSourceLastName       *string                  `json:"loan_source_last_name,omitempty"`
	LoanSourceMiddleName     *string                  `json:"loan_source_middle_name,omitempty"`
	LoanSourceName           *string                  `json:"loan_source_name,omitempty"`
	LoanSourcePrefix         *string                  `json:"loan_source_prefix,omitempty"`
	LoanSourceState          *string                  `json:"loan_source_state,omitempty"`
	LoanSourceStreet1        *string                  `json:"loan_source_street_1,omitempty"`
	LoanSourceStreet2        *string                  `json:"loan_source_street_2,omitempty"`
	LoanSourceSuffix         *string                  `json:"loan_source_suffix,omitempty"`
	LoanSourceZip            *int32                   `json:"loan_source_zip,omitempty"`
	MemoCode                 *string                  `json:"memo_code,omitempty"`
	MemoText                 *string                  `json:"memo_text,omitempty"`
	OriginalLoanAmount       *float32                 `json:"original_loan_amount,omitempty"`
	OriginalSubID            *int32                   `json:"original_sub_id,omitempty"`
	PaymentToDate            *float32                 `json:"payment_to_date,omitempty"`
	PdfURL                   *string                  `json:"pdf_url,omitempty"`
	PersonallyFunded         *string                  `json:"personally_funded,omitempty"`
	ReportType               *string                  `json:"report_type,omitempty"`
	ReportYear               *int32                   `json:"report_year,omitempty"`
	ScheduleALineNumber      *int32                   `json:"schedule_a_line_number,omitempty"`
	ScheduleType             *string                  `json:"schedule_type,omitempty"`
	ScheduleTypeFull         *string                  `json:"schedule_type_full,omitempty"`
	SecuredInd               *string                  `json:"secured_ind,omitempty"`
	SubID                    *string                  `json:"sub_id,omitempty"`
	TransactionID            *string                  `json:"transaction_id,omitempty"`
}

type GetSchedulesScheduleCSubIDDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo                                        `json:"pagination,omitempty"`
	Results    []GetSchedulesScheduleCSubIDDefaultApplicationJSONResults `json:"results,omitempty"`
}

type GetSchedulesScheduleCSubIDResponse struct {
	ContentType                                            string
	GetSchedulesScheduleCSubIDDefaultApplicationJSONObject *GetSchedulesScheduleCSubIDDefaultApplicationJSON
	StatusCode                                             int64
}
