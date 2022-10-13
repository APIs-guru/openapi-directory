package shared

type ApigatewayAPIConfigStateEnum string

const (
	ApigatewayAPIConfigStateEnumStateUnspecified ApigatewayAPIConfigStateEnum = "STATE_UNSPECIFIED"
	ApigatewayAPIConfigStateEnumCreating         ApigatewayAPIConfigStateEnum = "CREATING"
	ApigatewayAPIConfigStateEnumActive           ApigatewayAPIConfigStateEnum = "ACTIVE"
	ApigatewayAPIConfigStateEnumFailed           ApigatewayAPIConfigStateEnum = "FAILED"
	ApigatewayAPIConfigStateEnumDeleting         ApigatewayAPIConfigStateEnum = "DELETING"
	ApigatewayAPIConfigStateEnumUpdating         ApigatewayAPIConfigStateEnum = "UPDATING"
	ApigatewayAPIConfigStateEnumActivating       ApigatewayAPIConfigStateEnum = "ACTIVATING"
)

type ApigatewayAPIConfig struct {
	CreateTime            *string                                    `json:"createTime"`
	DisplayName           *string                                    `json:"displayName"`
	GatewayServiceAccount *string                                    `json:"gatewayServiceAccount"`
	GrpcServices          []ApigatewayAPIConfigGrpcServiceDefinition `json:"grpcServices"`
	Labels                map[string]string                          `json:"labels"`
	ManagedServiceConfigs []ApigatewayAPIConfigFile                  `json:"managedServiceConfigs"`
	Name                  *string                                    `json:"name"`
	OpenapiDocuments      []ApigatewayAPIConfigOpenAPIDocument       `json:"openapiDocuments"`
	ServiceConfigID       *string                                    `json:"serviceConfigId"`
	State                 *ApigatewayAPIConfigStateEnum              `json:"state"`
	UpdateTime            *string                                    `json:"updateTime"`
}
