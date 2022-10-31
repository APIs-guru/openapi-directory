package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetReportsEntityTypeEntityTypeEnum string

const (
	GetReportsEntityTypeEntityTypeEnumPresidential GetReportsEntityTypeEntityTypeEnum = "presidential"
	GetReportsEntityTypeEntityTypeEnumPacParty     GetReportsEntityTypeEntityTypeEnum = "pac-party"
	GetReportsEntityTypeEntityTypeEnumHouseSenate  GetReportsEntityTypeEntityTypeEnum = "house-senate"
	GetReportsEntityTypeEntityTypeEnumIeOnly       GetReportsEntityTypeEntityTypeEnum = "ie-only"
)

type GetReportsEntityTypePathParams struct {
	EntityType GetReportsEntityTypeEntityTypeEnum `pathParam:"style=simple,explode=false,name=entity_type"`
}

type GetReportsEntityTypeAmendmentIndicatorEnum string

const (
	GetReportsEntityTypeAmendmentIndicatorEnumUnknown GetReportsEntityTypeAmendmentIndicatorEnum = ""
	GetReportsEntityTypeAmendmentIndicatorEnumN       GetReportsEntityTypeAmendmentIndicatorEnum = "N"
	GetReportsEntityTypeAmendmentIndicatorEnumA       GetReportsEntityTypeAmendmentIndicatorEnum = "A"
	GetReportsEntityTypeAmendmentIndicatorEnumT       GetReportsEntityTypeAmendmentIndicatorEnum = "T"
	GetReportsEntityTypeAmendmentIndicatorEnumC       GetReportsEntityTypeAmendmentIndicatorEnum = "C"
	GetReportsEntityTypeAmendmentIndicatorEnumM       GetReportsEntityTypeAmendmentIndicatorEnum = "M"
	GetReportsEntityTypeAmendmentIndicatorEnumS       GetReportsEntityTypeAmendmentIndicatorEnum = "S"
)

type GetReportsEntityTypeFilerTypeEnum string

const (
	GetReportsEntityTypeFilerTypeEnumEFile GetReportsEntityTypeFilerTypeEnum = "e-file"
	GetReportsEntityTypeFilerTypeEnumPaper GetReportsEntityTypeFilerTypeEnum = "paper"
)

type GetReportsEntityTypeQueryParams struct {
	AmendmentIndicator              []GetReportsEntityTypeAmendmentIndicatorEnum `queryParam:"style=form,explode=true,name=amendment_indicator"`
	APIKey                          string                                       `queryParam:"style=form,explode=true,name=api_key"`
	BeginningImageNumber            []string                                     `queryParam:"style=form,explode=true,name=beginning_image_number"`
	CandidateID                     *string                                      `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID                     []string                                     `queryParam:"style=form,explode=true,name=committee_id"`
	Cycle                           []int32                                      `queryParam:"style=form,explode=true,name=cycle"`
	FilerType                       *GetReportsEntityTypeFilerTypeEnum           `queryParam:"style=form,explode=true,name=filer_type"`
	IsAmended                       *bool                                        `queryParam:"style=form,explode=true,name=is_amended"`
	MaxCashOnHandEndPeriodAmount    *string                                      `queryParam:"style=form,explode=true,name=max_cash_on_hand_end_period_amount"`
	MaxDebtsOwedExpenditures        *string                                      `queryParam:"style=form,explode=true,name=max_debts_owed_expenditures"`
	MaxDisbursementsAmount          *string                                      `queryParam:"style=form,explode=true,name=max_disbursements_amount"`
	MaxIndependentExpenditures      *string                                      `queryParam:"style=form,explode=true,name=max_independent_expenditures"`
	MaxPartyCoordinatedExpenditures *string                                      `queryParam:"style=form,explode=true,name=max_party_coordinated_expenditures"`
	MaxReceiptDate                  *time.Time                                   `queryParam:"style=form,explode=true,name=max_receipt_date"`
	MaxReceiptsAmount               *string                                      `queryParam:"style=form,explode=true,name=max_receipts_amount"`
	MaxTotalContributions           *string                                      `queryParam:"style=form,explode=true,name=max_total_contributions"`
	MinCashOnHandEndPeriodAmount    *string                                      `queryParam:"style=form,explode=true,name=min_cash_on_hand_end_period_amount"`
	MinDebtsOwedAmount              *string                                      `queryParam:"style=form,explode=true,name=min_debts_owed_amount"`
	MinDisbursementsAmount          *string                                      `queryParam:"style=form,explode=true,name=min_disbursements_amount"`
	MinIndependentExpenditures      *string                                      `queryParam:"style=form,explode=true,name=min_independent_expenditures"`
	MinPartyCoordinatedExpenditures *string                                      `queryParam:"style=form,explode=true,name=min_party_coordinated_expenditures"`
	MinReceiptDate                  *time.Time                                   `queryParam:"style=form,explode=true,name=min_receipt_date"`
	MinReceiptsAmount               *string                                      `queryParam:"style=form,explode=true,name=min_receipts_amount"`
	MinTotalContributions           *string                                      `queryParam:"style=form,explode=true,name=min_total_contributions"`
	MostRecent                      *bool                                        `queryParam:"style=form,explode=true,name=most_recent"`
	Page                            *int32                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage                         *int32                                       `queryParam:"style=form,explode=true,name=per_page"`
	ReportType                      []string                                     `queryParam:"style=form,explode=true,name=report_type"`
	Sort                            []string                                     `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                    *bool                                        `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                    *bool                                        `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast                   *bool                                        `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	Type                            []string                                     `queryParam:"style=form,explode=true,name=type"`
	Year                            []int32                                      `queryParam:"style=form,explode=true,name=year"`
}

type GetReportsEntityTypeRequest struct {
	PathParams  GetReportsEntityTypePathParams
	QueryParams GetReportsEntityTypeQueryParams
}

type GetReportsEntityTypeResponse struct {
	CommitteeReportsPage *shared.CommitteeReportsPage
	ContentType          string
	StatusCode           int64
}
