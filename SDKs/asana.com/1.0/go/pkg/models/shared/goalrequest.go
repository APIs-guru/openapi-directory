package shared

type GoalRequestMetricUnitEnum string

const (
	GoalRequestMetricUnitEnumNone       GoalRequestMetricUnitEnum = "none"
	GoalRequestMetricUnitEnumCurrency   GoalRequestMetricUnitEnum = "currency"
	GoalRequestMetricUnitEnumPercentage GoalRequestMetricUnitEnum = "percentage"
)

type GoalRequestMetricInput struct {
	CurrencyCode        *string                    `json:"currency_code,omitempty"`
	CurrentDisplayValue *string                    `json:"current_display_value,omitempty"`
	CurrentNumberValue  *float64                   `json:"current_number_value,omitempty"`
	InitialNumberValue  *float64                   `json:"initial_number_value,omitempty"`
	Precision           *int64                     `json:"precision,omitempty"`
	TargetNumberValue   *float64                   `json:"target_number_value,omitempty"`
	Unit                *GoalRequestMetricUnitEnum `json:"unit,omitempty"`
}

type GoalRequestOwnerInput struct {
	Name *string `json:"name,omitempty"`
}

// GoalRequestTeamInput
// *Conditional*. This property is only present when the `workspace` provided is an organization.
type GoalRequestTeamInput struct {
	Name *string `json:"name,omitempty"`
}

type GoalRequestTimePeriodPeriodEnum string

const (
	GoalRequestTimePeriodPeriodEnumFy GoalRequestTimePeriodPeriodEnum = "FY"
	GoalRequestTimePeriodPeriodEnumH1 GoalRequestTimePeriodPeriodEnum = "H1"
	GoalRequestTimePeriodPeriodEnumH2 GoalRequestTimePeriodPeriodEnum = "H2"
	GoalRequestTimePeriodPeriodEnumQ1 GoalRequestTimePeriodPeriodEnum = "Q1"
	GoalRequestTimePeriodPeriodEnumQ2 GoalRequestTimePeriodPeriodEnum = "Q2"
	GoalRequestTimePeriodPeriodEnumQ3 GoalRequestTimePeriodPeriodEnum = "Q3"
	GoalRequestTimePeriodPeriodEnumQ4 GoalRequestTimePeriodPeriodEnum = "Q4"
)

type GoalRequestTimePeriodInput struct {
	EndOn   *string                          `json:"end_on,omitempty"`
	Period  *GoalRequestTimePeriodPeriodEnum `json:"period,omitempty"`
	StartOn *string                          `json:"start_on,omitempty"`
}

type GoalRequestWorkspaceInput struct {
	Name *string `json:"name,omitempty"`
}

type GoalRequestInput struct {
	DueOn            *string                     `json:"due_on,omitempty"`
	Followers        []UserCompactInput          `json:"followers,omitempty"`
	HTMLNotes        *string                     `json:"html_notes,omitempty"`
	IsWorkspaceLevel *bool                       `json:"is_workspace_level,omitempty"`
	Liked            *bool                       `json:"liked,omitempty"`
	Metric           *GoalRequestMetricInput     `json:"metric,omitempty"`
	Name             *string                     `json:"name,omitempty"`
	Notes            *string                     `json:"notes,omitempty"`
	Owner            *GoalRequestOwnerInput      `json:"owner,omitempty"`
	StartOn          *string                     `json:"start_on,omitempty"`
	Status           *string                     `json:"status,omitempty"`
	Team             *GoalRequestTeamInput       `json:"team,omitempty"`
	TimePeriod       *GoalRequestTimePeriodInput `json:"time_period,omitempty"`
	Workspace        *GoalRequestWorkspaceInput  `json:"workspace,omitempty"`
}
