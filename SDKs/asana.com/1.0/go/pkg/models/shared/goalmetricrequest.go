package shared




type GoalMetricRequestResourceSubtypeEnum string

const (
    GoalMetricRequestResourceSubtypeEnumNumber GoalMetricRequestResourceSubtypeEnum = "number"
)



type GoalMetricRequestUnitEnum string

const (
    GoalMetricRequestUnitEnumNone GoalMetricRequestUnitEnum = "none"
GoalMetricRequestUnitEnumCurrency GoalMetricRequestUnitEnum = "currency"
GoalMetricRequestUnitEnumPercentage GoalMetricRequestUnitEnum = "percentage"
)


type GoalMetricRequest struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    CurrentDisplayValue *string `json:"current_display_value,omitempty"`
    CurrentNumberValue *float64 `json:"current_number_value,omitempty"`
    Gid *string `json:"gid,omitempty"`
    InitialNumberValue *float64 `json:"initial_number_value,omitempty"`
    Precision *int64 `json:"precision,omitempty"`
    ResourceSubtype *GoalMetricRequestResourceSubtypeEnum `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    TargetNumberValue *float64 `json:"target_number_value,omitempty"`
    Unit *GoalMetricRequestUnitEnum `json:"unit,omitempty"`
    
}

