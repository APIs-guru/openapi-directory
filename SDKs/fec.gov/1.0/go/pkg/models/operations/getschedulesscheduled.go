package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleDQueryParams struct {
	APIKey                        string     `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID                   []string   `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID                   []string   `queryParam:"style=form,explode=true,name=committee_id"`
	CreditorDebtorName            []string   `queryParam:"style=form,explode=true,name=creditor_debtor_name"`
	ImageNumber                   []string   `queryParam:"style=form,explode=true,name=image_number"`
	MaxAmountIncurred             *float32   `queryParam:"style=form,explode=true,name=max_amount_incurred"`
	MaxAmountOutstandingBeginning *float32   `queryParam:"style=form,explode=true,name=max_amount_outstanding_beginning"`
	MaxAmountOutstandingClose     *float32   `queryParam:"style=form,explode=true,name=max_amount_outstanding_close"`
	MaxDate                       *time.Time `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber                *string    `queryParam:"style=form,explode=true,name=max_image_number"`
	MaxPaymentPeriod              *float32   `queryParam:"style=form,explode=true,name=max_payment_period"`
	MinAmountIncurred             *float32   `queryParam:"style=form,explode=true,name=min_amount_incurred"`
	MinAmountOutstandingBeginning *float32   `queryParam:"style=form,explode=true,name=min_amount_outstanding_beginning"`
	MinAmountOutstandingClose     *float32   `queryParam:"style=form,explode=true,name=min_amount_outstanding_close"`
	MinDate                       *time.Time `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber                *string    `queryParam:"style=form,explode=true,name=min_image_number"`
	MinPaymentPeriod              *float32   `queryParam:"style=form,explode=true,name=min_payment_period"`
	NatureOfDebt                  *string    `queryParam:"style=form,explode=true,name=nature_of_debt"`
	Page                          *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage                       *int32     `queryParam:"style=form,explode=true,name=per_page"`
	Sort                          *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                  *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                  *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast                 *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleDRequest struct {
	QueryParams GetSchedulesScheduleDQueryParams
}

type GetSchedulesScheduleDDefaultApplicationJSONResults struct {
	ActionCode                          *string                  `json:"action_code"`
	ActionCodeFull                      *string                  `json:"action_code_full"`
	AmountIncurredPeriod                *float32                 `json:"amount_incurred_period"`
	CandidateFirstName                  *string                  `json:"candidate_first_name"`
	CandidateID                         *string                  `json:"candidate_id"`
	CandidateLastName                   *string                  `json:"candidate_last_name"`
	CandidateOffice                     *string                  `json:"candidate_office"`
	CandidateOfficeDistrict             *string                  `json:"candidate_office_district"`
	CandidateOfficeState                *string                  `json:"candidate_office_state"`
	CandidateOfficeStateFull            *string                  `json:"candidate_office_state_full"`
	CanidateName                        *string                  `json:"canidate_name"`
	Committee                           *shared.CommitteeHistory `json:"committee"`
	CommitteeID                         *string                  `json:"committee_id"`
	CommitteeName                       *string                  `json:"committee_name"`
	ConduitCommitteeCity                *string                  `json:"conduit_committee_city"`
	ConduitCommitteeID                  *string                  `json:"conduit_committee_id"`
	ConduitCommitteeName                *string                  `json:"conduit_committee_name"`
	ConduitCommitteeState               *string                  `json:"conduit_committee_state"`
	ConduitCommitteeStreet1             *string                  `json:"conduit_committee_street1"`
	ConduitCommitteeStreet2             *string                  `json:"conduit_committee_street2"`
	ConduitCommitteeZip                 *int32                   `json:"conduit_committee_zip"`
	CreditorDebtorCity                  *string                  `json:"creditor_debtor_city"`
	CreditorDebtorFirstName             *string                  `json:"creditor_debtor_first_name"`
	CreditorDebtorID                    *string                  `json:"creditor_debtor_id"`
	CreditorDebtorLastName              *string                  `json:"creditor_debtor_last_name"`
	CreditorDebtorMiddleName            *string                  `json:"creditor_debtor_middle_name"`
	CreditorDebtorName                  *string                  `json:"creditor_debtor_name"`
	CreditorDebtorPrefix                *string                  `json:"creditor_debtor_prefix"`
	CreditorDebtorState                 *string                  `json:"creditor_debtor_state"`
	CreditorDebtorStreet1               *string                  `json:"creditor_debtor_street1"`
	CreditorDebtorStreet2               *string                  `json:"creditor_debtor_street2"`
	CreditorDebtorSuffix                *string                  `json:"creditor_debtor_suffix"`
	ElectionCycle                       *int32                   `json:"election_cycle"`
	EntityType                          *string                  `json:"entity_type"`
	FileNumber                          *int32                   `json:"file_number"`
	FilingForm                          *string                  `json:"filing_form"`
	ImageNumber                         *string                  `json:"image_number"`
	LineNumber                          *string                  `json:"line_number"`
	LinkID                              *int32                   `json:"link_id"`
	LoadDate                            *time.Time               `json:"load_date"`
	NatureOfDebt                        *string                  `json:"nature_of_debt"`
	OriginalSubID                       *int32                   `json:"original_sub_id"`
	OutstandingBalanceBeginningOfPeriod *float32                 `json:"outstanding_balance_beginning_of_period"`
	OutstandingBalanceCloseOfPeriod     *float32                 `json:"outstanding_balance_close_of_period"`
	PaymentPeriod                       *float32                 `json:"payment_period"`
	PdfURL                              *string                  `json:"pdf_url"`
	ReportType                          *string                  `json:"report_type"`
	ReportYear                          *int32                   `json:"report_year"`
	ScheduleType                        *string                  `json:"schedule_type"`
	ScheduleTypeFull                    *string                  `json:"schedule_type_full"`
	SubID                               *string                  `json:"sub_id"`
	TransactionID                       *string                  `json:"transaction_id"`
}

type GetSchedulesScheduleDDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo                                   `json:"pagination"`
	Results    []GetSchedulesScheduleDDefaultApplicationJSONResults `json:"results"`
}

type GetSchedulesScheduleDResponse struct {
	ContentType                                       string
	GetSchedulesScheduleDDefaultApplicationJSONObject *GetSchedulesScheduleDDefaultApplicationJSON
	StatusCode                                        int64
}
