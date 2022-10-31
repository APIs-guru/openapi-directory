package shared




type ApigatewayAPIConfigStateEnum string

const (
    ApigatewayAPIConfigStateEnumStateUnspecified ApigatewayAPIConfigStateEnum = "STATE_UNSPECIFIED"
ApigatewayAPIConfigStateEnumCreating ApigatewayAPIConfigStateEnum = "CREATING"
ApigatewayAPIConfigStateEnumActive ApigatewayAPIConfigStateEnum = "ACTIVE"
ApigatewayAPIConfigStateEnumFailed ApigatewayAPIConfigStateEnum = "FAILED"
ApigatewayAPIConfigStateEnumDeleting ApigatewayAPIConfigStateEnum = "DELETING"
ApigatewayAPIConfigStateEnumUpdating ApigatewayAPIConfigStateEnum = "UPDATING"
ApigatewayAPIConfigStateEnumActivating ApigatewayAPIConfigStateEnum = "ACTIVATING"
)


type ApigatewayAPIConfig struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    GatewayConfig *ApigatewayGatewayConfig `json:"gatewayConfig,omitempty"`
    GatewayServiceAccount *string `json:"gatewayServiceAccount,omitempty"`
    GrpcServices []ApigatewayAPIConfigGrpcServiceDefinition `json:"grpcServices,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    ManagedServiceConfigs []ApigatewayAPIConfigFile `json:"managedServiceConfigs,omitempty"`
    Name *string `json:"name,omitempty"`
    OpenapiDocuments []ApigatewayAPIConfigOpenAPIDocument `json:"openapiDocuments,omitempty"`
    ServiceConfigID *string `json:"serviceConfigId,omitempty"`
    State *ApigatewayAPIConfigStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

