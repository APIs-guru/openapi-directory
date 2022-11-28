package shared

// ApigatewayAPIConfigGrpcServiceDefinition
// A gRPC service definition.
type ApigatewayAPIConfigGrpcServiceDefinition struct {
	FileDescriptorSet *ApigatewayAPIConfigFile  `json:"fileDescriptorSet,omitempty"`
	Source            []ApigatewayAPIConfigFile `json:"source,omitempty"`
}
