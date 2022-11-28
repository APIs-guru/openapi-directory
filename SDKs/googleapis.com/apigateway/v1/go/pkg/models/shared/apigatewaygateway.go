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

// ApigatewayGatewayInput
// A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
type ApigatewayGatewayInput struct {
	APIConfig   *string           `json:"apiConfig,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
}

// ApigatewayGateway
// A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
type ApigatewayGateway struct {
	APIConfig       *string                     `json:"apiConfig,omitempty"`
	CreateTime      *string                     `json:"createTime,omitempty"`
	DefaultHostname *string                     `json:"defaultHostname,omitempty"`
	DisplayName     *string                     `json:"displayName,omitempty"`
	Labels          map[string]string           `json:"labels,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	State           *ApigatewayGatewayStateEnum `json:"state,omitempty"`
	UpdateTime      *string                     `json:"updateTime,omitempty"`
}
