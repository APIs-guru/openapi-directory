package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidatesTotalsOfficeEnum string

const (
	GetCandidatesTotalsOfficeEnumUnknown GetCandidatesTotalsOfficeEnum = ""
	GetCandidatesTotalsOfficeEnumH       GetCandidatesTotalsOfficeEnum = "H"
	GetCandidatesTotalsOfficeEnumS       GetCandidatesTotalsOfficeEnum = "S"
	GetCandidatesTotalsOfficeEnumP       GetCandidatesTotalsOfficeEnum = "P"
)

type GetCandidatesTotalsQueryParams struct {
	APIKey                  string                          `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID             []string                        `queryParam:"style=form,explode=true,name=candidate_id"`
	Cycle                   []int32                         `queryParam:"style=form,explode=true,name=cycle"`
	District                []string                        `queryParam:"style=form,explode=true,name=district"`
	ElectionFull            *bool                           `queryParam:"style=form,explode=true,name=election_full"`
	ElectionYear            []int32                         `queryParam:"style=form,explode=true,name=election_year"`
	FederalFundsFlag        *bool                           `queryParam:"style=form,explode=true,name=federal_funds_flag"`
	HasRaisedFunds          *bool                           `queryParam:"style=form,explode=true,name=has_raised_funds"`
	IsActiveCandidate       *bool                           `queryParam:"style=form,explode=true,name=is_active_candidate"`
	MaxCashOnHandEndPeriod  *string                         `queryParam:"style=form,explode=true,name=max_cash_on_hand_end_period"`
	MaxDebtsOwedByCommittee *string                         `queryParam:"style=form,explode=true,name=max_debts_owed_by_committee"`
	MaxDisbursements        *string                         `queryParam:"style=form,explode=true,name=max_disbursements"`
	MaxReceipts             *string                         `queryParam:"style=form,explode=true,name=max_receipts"`
	MinCashOnHandEndPeriod  *string                         `queryParam:"style=form,explode=true,name=min_cash_on_hand_end_period"`
	MinDebtsOwedByCommittee *string                         `queryParam:"style=form,explode=true,name=min_debts_owed_by_committee"`
	MinDisbursements        *string                         `queryParam:"style=form,explode=true,name=min_disbursements"`
	MinReceipts             *string                         `queryParam:"style=form,explode=true,name=min_receipts"`
	Office                  []GetCandidatesTotalsOfficeEnum `queryParam:"style=form,explode=true,name=office"`
	Page                    *int32                          `queryParam:"style=form,explode=true,name=page"`
	Party                   []string                        `queryParam:"style=form,explode=true,name=party"`
	PerPage                 *int32                          `queryParam:"style=form,explode=true,name=per_page"`
	Q                       []string                        `queryParam:"style=form,explode=true,name=q"`
	Sort                    *string                         `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull            *bool                           `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly            *bool                           `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast           *bool                           `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State                   []string                        `queryParam:"style=form,explode=true,name=state"`
}

type GetCandidatesTotalsRequest struct {
	QueryParams GetCandidatesTotalsQueryParams
}

type GetCandidatesTotalsResponse struct {
	CandidateHistoryTotalPage *shared.CandidateHistoryTotalPage
	ContentType               string
	StatusCode                int64
}
