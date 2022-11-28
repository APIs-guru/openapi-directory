package shared

type GoalMetricRequestUnitEnum string

const (
	GoalMetricRequestUnitEnumNone       GoalMetricRequestUnitEnum = "none"
	GoalMetricRequestUnitEnumCurrency   GoalMetricRequestUnitEnum = "currency"
	GoalMetricRequestUnitEnumPercentage GoalMetricRequestUnitEnum = "percentage"
)

type GoalMetricRequestInput struct {
	CurrencyCode        *string                    `json:"currency_code,omitempty"`
	CurrentDisplayValue *string                    `json:"current_display_value,omitempty"`
	CurrentNumberValue  *float64                   `json:"current_number_value,omitempty"`
	InitialNumberValue  *float64                   `json:"initial_number_value,omitempty"`
	Precision           *int64                     `json:"precision,omitempty"`
	TargetNumberValue   *float64                   `json:"target_number_value,omitempty"`
	Unit                *GoalMetricRequestUnitEnum `json:"unit,omitempty"`
}
