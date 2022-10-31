package shared




type GoalRequestMetricResourceSubtypeEnum string

const (
    GoalRequestMetricResourceSubtypeEnumNumber GoalRequestMetricResourceSubtypeEnum = "number"
)



type GoalRequestMetricUnitEnum string

const (
    GoalRequestMetricUnitEnumNone GoalRequestMetricUnitEnum = "none"
GoalRequestMetricUnitEnumCurrency GoalRequestMetricUnitEnum = "currency"
GoalRequestMetricUnitEnumPercentage GoalRequestMetricUnitEnum = "percentage"
)


type GoalRequestMetric struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    CurrentDisplayValue *string `json:"current_display_value,omitempty"`
    CurrentNumberValue *float64 `json:"current_number_value,omitempty"`
    Gid *string `json:"gid,omitempty"`
    InitialNumberValue *float64 `json:"initial_number_value,omitempty"`
    Precision *int64 `json:"precision,omitempty"`
    ResourceSubtype *GoalRequestMetricResourceSubtypeEnum `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    TargetNumberValue *float64 `json:"target_number_value,omitempty"`
    Unit *GoalRequestMetricUnitEnum `json:"unit,omitempty"`
    
}

type GoalRequestOwner struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type GoalRequestTeam struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
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
    EndOn *string `json:"end_on,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Period *GoalRequestTimePeriodPeriodEnum `json:"period,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *string `json:"start_on,omitempty"`
    
}

type GoalRequestWorkspace struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type GoalRequest struct {
    DueOn *string `json:"due_on,omitempty"`
    Followers []UserCompact `json:"followers,omitempty"`
    Gid *string `json:"gid,omitempty"`
    HTMLNotes *string `json:"html_notes,omitempty"`
    IsWorkspaceLevel *bool `json:"is_workspace_level,omitempty"`
    Liked *bool `json:"liked,omitempty"`
    Metric *GoalRequestMetric `json:"metric,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Owner *GoalRequestOwner `json:"owner,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *string `json:"start_on,omitempty"`
    Status *string `json:"status,omitempty"`
    Team *GoalRequestTeam `json:"team,omitempty"`
    TimePeriod *GoalRequestTimePeriod `json:"time_period,omitempty"`
    Workspace *GoalRequestWorkspace `json:"workspace,omitempty"`
    
}

