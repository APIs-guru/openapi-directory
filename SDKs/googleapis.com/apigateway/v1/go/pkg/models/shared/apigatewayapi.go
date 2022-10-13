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
	CreateTime     *string                 `json:"createTime"`
	DisplayName    *string                 `json:"displayName"`
	Labels         map[string]string       `json:"labels"`
	ManagedService *string                 `json:"managedService"`
	Name           *string                 `json:"name"`
	State          *ApigatewayAPIStateEnum `json:"state"`
	UpdateTime     *string                 `json:"updateTime"`
}
