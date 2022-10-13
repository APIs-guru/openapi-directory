package shared

type GoalMetricRequestResourceSubtypeEnum string

const (
	GoalMetricRequestResourceSubtypeEnumNumber GoalMetricRequestResourceSubtypeEnum = "number"
)

type GoalMetricRequestUnitEnum string

const (
	GoalMetricRequestUnitEnumNone       GoalMetricRequestUnitEnum = "none"
	GoalMetricRequestUnitEnumCurrency   GoalMetricRequestUnitEnum = "currency"
	GoalMetricRequestUnitEnumPercentage GoalMetricRequestUnitEnum = "percentage"
)

type GoalMetricRequest struct {
	CurrencyCode        *string                               `json:"currency_code"`
	CurrentDisplayValue *string                               `json:"current_display_value"`
	CurrentNumberValue  *float64                              `json:"current_number_value"`
	Gid                 *string                               `json:"gid"`
	InitialNumberValue  *float64                              `json:"initial_number_value"`
	Precision           *int64                                `json:"precision"`
	ResourceSubtype     *GoalMetricRequestResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType        *string                               `json:"resource_type"`
	TargetNumberValue   *float64                              `json:"target_number_value"`
	Unit                *GoalMetricRequestUnitEnum            `json:"unit"`
}
