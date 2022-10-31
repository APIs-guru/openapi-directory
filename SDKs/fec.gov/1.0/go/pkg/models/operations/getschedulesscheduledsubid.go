package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSchedulesScheduleDSubIDPathParams struct {
    SubID string `pathParam:"style=simple,explode=false,name=sub_id"`
    
}

type GetSchedulesScheduleDSubIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetSchedulesScheduleDSubIDRequest struct {
    PathParams GetSchedulesScheduleDSubIDPathParams 
    QueryParams GetSchedulesScheduleDSubIDQueryParams 
    
}

type GetSchedulesScheduleDSubIDDefaultApplicationJSONResults struct {
    ActionCode *string `json:"action_code,omitempty"`
    ActionCodeFull *string `json:"action_code_full,omitempty"`
    AmountIncurredPeriod *float32 `json:"amount_incurred_period,omitempty"`
    CandidateFirstName *string `json:"candidate_first_name,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateLastName *string `json:"candidate_last_name,omitempty"`
    CandidateOffice *string `json:"candidate_office,omitempty"`
    CandidateOfficeDistrict *string `json:"candidate_office_district,omitempty"`
    CandidateOfficeState *string `json:"candidate_office_state,omitempty"`
    CandidateOfficeStateFull *string `json:"candidate_office_state_full,omitempty"`
    CanidateName *string `json:"canidate_name,omitempty"`
    Committee *shared.CommitteeHistory `json:"committee,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    ConduitCommitteeCity *string `json:"conduit_committee_city,omitempty"`
    ConduitCommitteeID *string `json:"conduit_committee_id,omitempty"`
    ConduitCommitteeName *string `json:"conduit_committee_name,omitempty"`
    ConduitCommitteeState *string `json:"conduit_committee_state,omitempty"`
    ConduitCommitteeStreet1 *string `json:"conduit_committee_street1,omitempty"`
    ConduitCommitteeStreet2 *string `json:"conduit_committee_street2,omitempty"`
    ConduitCommitteeZip *int32 `json:"conduit_committee_zip,omitempty"`
    CreditorDebtorCity *string `json:"creditor_debtor_city,omitempty"`
    CreditorDebtorFirstName *string `json:"creditor_debtor_first_name,omitempty"`
    CreditorDebtorID *string `json:"creditor_debtor_id,omitempty"`
    CreditorDebtorLastName *string `json:"creditor_debtor_last_name,omitempty"`
    CreditorDebtorMiddleName *string `json:"creditor_debtor_middle_name,omitempty"`
    CreditorDebtorName *string `json:"creditor_debtor_name,omitempty"`
    CreditorDebtorPrefix *string `json:"creditor_debtor_prefix,omitempty"`
    CreditorDebtorState *string `json:"creditor_debtor_state,omitempty"`
    CreditorDebtorStreet1 *string `json:"creditor_debtor_street1,omitempty"`
    CreditorDebtorStreet2 *string `json:"creditor_debtor_street2,omitempty"`
    CreditorDebtorSuffix *string `json:"creditor_debtor_suffix,omitempty"`
    ElectionCycle *int32 `json:"election_cycle,omitempty"`
    EntityType *string `json:"entity_type,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    FilingForm *string `json:"filing_form,omitempty"`
    ImageNumber *string `json:"image_number,omitempty"`
    LineNumber *string `json:"line_number,omitempty"`
    LinkID *int32 `json:"link_id,omitempty"`
    LoadDate *time.Time `json:"load_date,omitempty"`
    NatureOfDebt *string `json:"nature_of_debt,omitempty"`
    OriginalSubID *int32 `json:"original_sub_id,omitempty"`
    OutstandingBalanceBeginningOfPeriod *float32 `json:"outstanding_balance_beginning_of_period,omitempty"`
    OutstandingBalanceCloseOfPeriod *float32 `json:"outstanding_balance_close_of_period,omitempty"`
    PaymentPeriod *float32 `json:"payment_period,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    ScheduleType *string `json:"schedule_type,omitempty"`
    ScheduleTypeFull *string `json:"schedule_type_full,omitempty"`
    SubID *string `json:"sub_id,omitempty"`
    TransactionID *string `json:"transaction_id,omitempty"`
    
}

type GetSchedulesScheduleDSubIDDefaultApplicationJSON struct {
    Pagination *shared.OffsetInfo `json:"pagination,omitempty"`
    Results []GetSchedulesScheduleDSubIDDefaultApplicationJSONResults `json:"results,omitempty"`
    
}

type GetSchedulesScheduleDSubIDResponse struct {
    ContentType string 
    GetSchedulesScheduleDSubIDDefaultApplicationJSONObject *GetSchedulesScheduleDSubIDDefaultApplicationJSON 
    StatusCode int64 
    
}

