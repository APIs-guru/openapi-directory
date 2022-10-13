package shared

type ApigatewayGatewayStateEnum string

const (
	ApigatewayGatewayStateEnumStateUnspecified ApigatewayGatewayStateEnum = "STATE_UNSPECIFIED"
	ApigatewayGatewayStateEnumCreating         ApigatewayGatewayStateEnum = "CREATING"
	ApigatewayGatewayStateEnumActive           ApigatewayGatewayStateEnum = "ACTIVE"
	ApigatewayGatewayStateEnumFailed           ApigatewayGatewayStateEnum = "FAILED"
	ApigatewayGatewayStateEnumDeleting         ApigatewayGatewayStateEnum = "DELETING"
	ApigatewayGatewayStateEnumUpdating         ApigatewayGatewayStateEnum = "UPDATING"
)

type ApigatewayGateway struct {
	APIConfig       *string                     `json:"apiConfig"`
	CreateTime      *string                     `json:"createTime"`
	DefaultHostname *string                     `json:"defaultHostname"`
	DisplayName     *string                     `json:"displayName"`
	Labels          map[string]string           `json:"labels"`
	Name            *string                     `json:"name"`
	State           *ApigatewayGatewayStateEnum `json:"state"`
	UpdateTime      *string                     `json:"updateTime"`
}
