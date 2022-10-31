package shared




type ItvPlanListItemIntervalEnum string

const (
    ItvPlanListItemIntervalEnumDay ItvPlanListItemIntervalEnum = "day"
ItvPlanListItemIntervalEnumWeek ItvPlanListItemIntervalEnum = "week"
ItvPlanListItemIntervalEnumMonth ItvPlanListItemIntervalEnum = "month"
ItvPlanListItemIntervalEnumYear ItvPlanListItemIntervalEnum = "year"
ItvPlanListItemIntervalEnumNone ItvPlanListItemIntervalEnum = "none"
)


type ItvPlanListItem struct {
    Amount float32 `json:"amount"`
    Currency string `json:"currency"`
    Description string `json:"description"`
    ID string `json:"id"`
    Interval ItvPlanListItemIntervalEnum `json:"interval"`
    IntervalCount int32 `json:"intervalCount"`
    Nickname string `json:"nickname"`
    Product string `json:"product"`
    SavingLabel *string `json:"savingLabel,omitempty"`
    SwitchingText *string `json:"switchingText,omitempty"`
    TrialPeriodDays *int32 `json:"trialPeriodDays,omitempty"`
    
}

