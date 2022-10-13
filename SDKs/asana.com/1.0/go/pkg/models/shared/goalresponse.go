package shared

type GoalResponseMetricResourceSubtypeEnum string

const (
	GoalResponseMetricResourceSubtypeEnumNumber GoalResponseMetricResourceSubtypeEnum = "number"
)

type GoalResponseMetricUnitEnum string

const (
	GoalResponseMetricUnitEnumNone       GoalResponseMetricUnitEnum = "none"
	GoalResponseMetricUnitEnumCurrency   GoalResponseMetricUnitEnum = "currency"
	GoalResponseMetricUnitEnumPercentage GoalResponseMetricUnitEnum = "percentage"
)

type GoalResponseMetric struct {
	CurrencyCode        *string                                `json:"currency_code"`
	CurrentDisplayValue *string                                `json:"current_display_value"`
	CurrentNumberValue  *float64                               `json:"current_number_value"`
	Gid                 *string                                `json:"gid"`
	InitialNumberValue  *float64                               `json:"initial_number_value"`
	Precision           *int64                                 `json:"precision"`
	ResourceSubtype     *GoalResponseMetricResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType        *string                                `json:"resource_type"`
	TargetNumberValue   *float64                               `json:"target_number_value"`
	Unit                *GoalResponseMetricUnitEnum            `json:"unit"`
}

type GoalResponseOwner struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalResponseTeam struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalResponseTimePeriodPeriodEnum string

const (
	GoalResponseTimePeriodPeriodEnumFy GoalResponseTimePeriodPeriodEnum = "FY"
	GoalResponseTimePeriodPeriodEnumH1 GoalResponseTimePeriodPeriodEnum = "H1"
	GoalResponseTimePeriodPeriodEnumH2 GoalResponseTimePeriodPeriodEnum = "H2"
	GoalResponseTimePeriodPeriodEnumQ1 GoalResponseTimePeriodPeriodEnum = "Q1"
	GoalResponseTimePeriodPeriodEnumQ2 GoalResponseTimePeriodPeriodEnum = "Q2"
	GoalResponseTimePeriodPeriodEnumQ3 GoalResponseTimePeriodPeriodEnum = "Q3"
	GoalResponseTimePeriodPeriodEnumQ4 GoalResponseTimePeriodPeriodEnum = "Q4"
)

type GoalResponseTimePeriod struct {
	EndOn        *string                           `json:"end_on"`
	Gid          *string                           `json:"gid"`
	Period       *GoalResponseTimePeriodPeriodEnum `json:"period"`
	ResourceType *string                           `json:"resource_type"`
	StartOn      *string                           `json:"start_on"`
}

type GoalResponseWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalResponse struct {
	DueOn            *string                 `json:"due_on"`
	Followers        []UserCompact           `json:"followers"`
	Gid              *string                 `json:"gid"`
	HTMLNotes        *string                 `json:"html_notes"`
	IsWorkspaceLevel *bool                   `json:"is_workspace_level"`
	Liked            *bool                   `json:"liked"`
	Likes            []Like                  `json:"likes"`
	Metric           *GoalResponseMetric     `json:"metric"`
	Name             *string                 `json:"name"`
	Notes            *string                 `json:"notes"`
	NumLikes         *int64                  `json:"num_likes"`
	Owner            *GoalResponseOwner      `json:"owner"`
	ResourceType     *string                 `json:"resource_type"`
	StartOn          *string                 `json:"start_on"`
	Status           *string                 `json:"status"`
	Team             *GoalResponseTeam       `json:"team"`
	TimePeriod       *GoalResponseTimePeriod `json:"time_period"`
	Workspace        *GoalResponseWorkspace  `json:"workspace"`
}
