package shared




type AccountStateEnum string

const (
    AccountStateEnumStateUnspecified AccountStateEnum = "STATE_UNSPECIFIED"
AccountStateEnumReady AccountStateEnum = "READY"
AccountStateEnumNeedsAttention AccountStateEnum = "NEEDS_ATTENTION"
AccountStateEnumClosed AccountStateEnum = "CLOSED"
)


type Account struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PendingTasks []string `json:"pendingTasks,omitempty"`
    Premium *bool `json:"premium,omitempty"`
    State *AccountStateEnum `json:"state,omitempty"`
    TimeZone *TimeZone `json:"timeZone,omitempty"`
    
}

