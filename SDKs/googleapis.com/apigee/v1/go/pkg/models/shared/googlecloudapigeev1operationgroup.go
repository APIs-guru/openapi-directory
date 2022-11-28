package shared

// GoogleCloudApigeeV1OperationGroup
// List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
type GoogleCloudApigeeV1OperationGroup struct {
	OperationConfigType *string                              `json:"operationConfigType,omitempty"`
	OperationConfigs    []GoogleCloudApigeeV1OperationConfig `json:"operationConfigs,omitempty"`
}
