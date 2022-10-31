package shared

type ApigatewayAPIStateEnum string

const (
	ApigatewayAPIStateEnumStateUnspecified ApigatewayAPIStateEnum = "STATE_UNSPECIFIED"
	ApigatewayAPIStateEnumCreating         ApigatewayAPIStateEnum = "CREATING"
	ApigatewayAPIStateEnumActive           ApigatewayAPIStateEnum = "ACTIVE"
	ApigatewayAPIStateEnumFailed           ApigatewayAPIStateEnum = "FAILED"
	ApigatewayAPIStateEnumDeleting         ApigatewayAPIStateEnum = "DELETING"
	ApigatewayAPIStateEnumUpdating         ApigatewayAPIStateEnum = "UPDATING"
)

type ApigatewayAPI struct {
	CreateTime     *string                 `json:"createTime,omitempty"`
	DisplayName    *string                 `json:"displayName,omitempty"`
	Labels         map[string]string       `json:"labels,omitempty"`
	ManagedService *string                 `json:"managedService,omitempty"`
	Name           *string                 `json:"name,omitempty"`
	State          *ApigatewayAPIStateEnum `json:"state,omitempty"`
	UpdateTime     *string                 `json:"updateTime,omitempty"`
}
