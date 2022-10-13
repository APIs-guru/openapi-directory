package shared

type AccountStateEnum string

const (
	AccountStateEnumStateUnspecified AccountStateEnum = "STATE_UNSPECIFIED"
	AccountStateEnumReady            AccountStateEnum = "READY"
	AccountStateEnumNeedsAttention   AccountStateEnum = "NEEDS_ATTENTION"
	AccountStateEnumClosed           AccountStateEnum = "CLOSED"
)

type Account struct {
	CreateTime   *string           `json:"createTime"`
	DisplayName  *string           `json:"displayName"`
	Name         *string           `json:"name"`
	PendingTasks []string          `json:"pendingTasks"`
	Premium      *bool             `json:"premium"`
	State        *AccountStateEnum `json:"state"`
	TimeZone     *TimeZone         `json:"timeZone"`
}
