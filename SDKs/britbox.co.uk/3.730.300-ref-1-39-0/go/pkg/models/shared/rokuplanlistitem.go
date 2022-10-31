package shared

type RokuPlanListItemIntervalEnum string

const (
	RokuPlanListItemIntervalEnumDay   RokuPlanListItemIntervalEnum = "day"
	RokuPlanListItemIntervalEnumWeek  RokuPlanListItemIntervalEnum = "week"
	RokuPlanListItemIntervalEnumMonth RokuPlanListItemIntervalEnum = "month"
	RokuPlanListItemIntervalEnumYear  RokuPlanListItemIntervalEnum = "year"
	RokuPlanListItemIntervalEnumNone  RokuPlanListItemIntervalEnum = "none"
)

type RokuPlanListItem struct {
	Amount          float32                      `json:"amount"`
	Currency        string                       `json:"currency"`
	Description     string                       `json:"description"`
	Interval        RokuPlanListItemIntervalEnum `json:"interval"`
	IntervalCount   int32                        `json:"intervalCount"`
	Nickname        string                       `json:"nickname"`
	Product         string                       `json:"product"`
	ProductCode     string                       `json:"productCode"`
	SavingLabel     string                       `json:"savingLabel"`
	TrialPeriodDays int32                        `json:"trialPeriodDays"`
}
