package shared




type GoalResponseMetricResourceSubtypeEnum string

const (
    GoalResponseMetricResourceSubtypeEnumNumber GoalResponseMetricResourceSubtypeEnum = "number"
)



type GoalResponseMetricUnitEnum string

const (
    GoalResponseMetricUnitEnumNone GoalResponseMetricUnitEnum = "none"
GoalResponseMetricUnitEnumCurrency GoalResponseMetricUnitEnum = "currency"
GoalResponseMetricUnitEnumPercentage GoalResponseMetricUnitEnum = "percentage"
)


type GoalResponseMetric struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    CurrentDisplayValue *string `json:"current_display_value,omitempty"`
    CurrentNumberValue *float64 `json:"current_number_value,omitempty"`
    Gid *string `json:"gid,omitempty"`
    InitialNumberValue *float64 `json:"initial_number_value,omitempty"`
    Precision *int64 `json:"precision,omitempty"`
    ResourceSubtype *GoalResponseMetricResourceSubtypeEnum `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    TargetNumberValue *float64 `json:"target_number_value,omitempty"`
    Unit *GoalResponseMetricUnitEnum `json:"unit,omitempty"`
    
}

type GoalResponseOwner struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type GoalResponseTeam struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
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
    EndOn *string `json:"end_on,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Period *GoalResponseTimePeriodPeriodEnum `json:"period,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *string `json:"start_on,omitempty"`
    
}

type GoalResponseWorkspace struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type GoalResponse struct {
    DueOn *string `json:"due_on,omitempty"`
    Followers []UserCompact `json:"followers,omitempty"`
    Gid *string `json:"gid,omitempty"`
    HTMLNotes *string `json:"html_notes,omitempty"`
    IsWorkspaceLevel *bool `json:"is_workspace_level,omitempty"`
    Liked *bool `json:"liked,omitempty"`
    Likes []Like `json:"likes,omitempty"`
    Metric *GoalResponseMetric `json:"metric,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    NumLikes *int64 `json:"num_likes,omitempty"`
    Owner *GoalResponseOwner `json:"owner,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *string `json:"start_on,omitempty"`
    Status *string `json:"status,omitempty"`
    Team *GoalResponseTeam `json:"team,omitempty"`
    TimePeriod *GoalResponseTimePeriod `json:"time_period,omitempty"`
    Workspace *GoalResponseWorkspace `json:"workspace,omitempty"`
    
}

