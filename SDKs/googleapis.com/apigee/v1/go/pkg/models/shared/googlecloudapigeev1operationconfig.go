package shared

// GoogleCloudApigeeV1OperationConfig
// Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
type GoogleCloudApigeeV1OperationConfig struct {
	APISource  *string                        `json:"apiSource,omitempty"`
	Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
	Operations []GoogleCloudApigeeV1Operation `json:"operations,omitempty"`
	Quota      *GoogleCloudApigeeV1Quota      `json:"quota,omitempty"`
}
