package shared

// GoogleCloudApigeeV1GraphQlOperationGroup
// List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
type GoogleCloudApigeeV1GraphQlOperationGroup struct {
	OperationConfigType *string                                     `json:"operationConfigType,omitempty"`
	OperationConfigs    []GoogleCloudApigeeV1GraphQlOperationConfig `json:"operationConfigs,omitempty"`
}
