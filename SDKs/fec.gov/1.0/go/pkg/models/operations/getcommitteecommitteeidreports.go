package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitteeCommitteeIDReportsPathParams struct {
	CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
}

type GetCommitteeCommitteeIDReportsQueryParams struct {
	APIKey                          string   `queryParam:"style=form,explode=true,name=api_key"`
	BeginningImageNumber            []string `queryParam:"style=form,explode=true,name=beginning_image_number"`
	CandidateID                     *string  `queryParam:"style=form,explode=true,name=candidate_id"`
	Cycle                           []int32  `queryParam:"style=form,explode=true,name=cycle"`
	IsAmended                       *bool    `queryParam:"style=form,explode=true,name=is_amended"`
	MaxCashOnHandEndPeriodAmount    *string  `queryParam:"style=form,explode=true,name=max_cash_on_hand_end_period_amount"`
	MaxDebtsOwedExpenditures        *string  `queryParam:"style=form,explode=true,name=max_debts_owed_expenditures"`
	MaxDisbursementsAmount          *string  `queryParam:"style=form,explode=true,name=max_disbursements_amount"`
	MaxIndependentExpenditures      *string  `queryParam:"style=form,explode=true,name=max_independent_expenditures"`
	MaxPartyCoordinatedExpenditures *string  `queryParam:"style=form,explode=true,name=max_party_coordinated_expenditures"`
	MaxReceiptsAmount               *string  `queryParam:"style=form,explode=true,name=max_receipts_amount"`
	MaxTotalContributions           *string  `queryParam:"style=form,explode=true,name=max_total_contributions"`
	MinCashOnHandEndPeriodAmount    *string  `queryParam:"style=form,explode=true,name=min_cash_on_hand_end_period_amount"`
	MinDebtsOwedAmount              *string  `queryParam:"style=form,explode=true,name=min_debts_owed_amount"`
	MinDisbursementsAmount          *string  `queryParam:"style=form,explode=true,name=min_disbursements_amount"`
	MinIndependentExpenditures      *string  `queryParam:"style=form,explode=true,name=min_independent_expenditures"`
	MinPartyCoordinatedExpenditures *string  `queryParam:"style=form,explode=true,name=min_party_coordinated_expenditures"`
	MinReceiptsAmount               *string  `queryParam:"style=form,explode=true,name=min_receipts_amount"`
	MinTotalContributions           *string  `queryParam:"style=form,explode=true,name=min_total_contributions"`
	Page                            *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage                         *int32   `queryParam:"style=form,explode=true,name=per_page"`
	ReportType                      []string `queryParam:"style=form,explode=true,name=report_type"`
	Sort                            []string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                    *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                    *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast                   *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	Type                            []string `queryParam:"style=form,explode=true,name=type"`
	Year                            []int32  `queryParam:"style=form,explode=true,name=year"`
}

type GetCommitteeCommitteeIDReportsRequest struct {
	PathParams  GetCommitteeCommitteeIDReportsPathParams
	QueryParams GetCommitteeCommitteeIDReportsQueryParams
}

type GetCommitteeCommitteeIDReportsResponse struct {
	CommitteeReportsPage *shared.CommitteeReportsPage
	ContentType          string
	StatusCode           int64
}
