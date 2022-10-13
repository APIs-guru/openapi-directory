package shared

type GoalRequestMetricResourceSubtypeEnum string

const (
	GoalRequestMetricResourceSubtypeEnumNumber GoalRequestMetricResourceSubtypeEnum = "number"
)

type GoalRequestMetricUnitEnum string

const (
	GoalRequestMetricUnitEnumNone       GoalRequestMetricUnitEnum = "none"
	GoalRequestMetricUnitEnumCurrency   GoalRequestMetricUnitEnum = "currency"
	GoalRequestMetricUnitEnumPercentage GoalRequestMetricUnitEnum = "percentage"
)

type GoalRequestMetric struct {
	CurrencyCode        *string                               `json:"currency_code"`
	CurrentDisplayValue *string                               `json:"current_display_value"`
	CurrentNumberValue  *float64                              `json:"current_number_value"`
	Gid                 *string                               `json:"gid"`
	InitialNumberValue  *float64                              `json:"initial_number_value"`
	Precision           *int64                                `json:"precision"`
	ResourceSubtype     *GoalRequestMetricResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType        *string                               `json:"resource_type"`
	TargetNumberValue   *float64                              `json:"target_number_value"`
	Unit                *GoalRequestMetricUnitEnum            `json:"unit"`
}

type GoalRequestOwner struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalRequestTeam struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
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

type GoalRequestTimePeriod struct {
	EndOn        *string                          `json:"end_on"`
	Gid          *string                          `json:"gid"`
	Period       *GoalRequestTimePeriodPeriodEnum `json:"period"`
	ResourceType *string                          `json:"resource_type"`
	StartOn      *string                          `json:"start_on"`
}

type GoalRequestWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalRequest struct {
	DueOn            *string                `json:"due_on"`
	Followers        []UserCompact          `json:"followers"`
	Gid              *string                `json:"gid"`
	HTMLNotes        *string                `json:"html_notes"`
	IsWorkspaceLevel *bool                  `json:"is_workspace_level"`
	Liked            *bool                  `json:"liked"`
	Metric           *GoalRequestMetric     `json:"metric"`
	Name             *string                `json:"name"`
	Notes            *string                `json:"notes"`
	Owner            *GoalRequestOwner      `json:"owner"`
	ResourceType     *string                `json:"resource_type"`
	StartOn          *string                `json:"start_on"`
	Status           *string                `json:"status"`
	Team             *GoalRequestTeam       `json:"team"`
	TimePeriod       *GoalRequestTimePeriod `json:"time_period"`
	Workspace        *GoalRequestWorkspace  `json:"workspace"`
}
