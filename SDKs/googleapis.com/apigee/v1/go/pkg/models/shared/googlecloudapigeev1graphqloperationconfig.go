package shared

// GoogleCloudApigeeV1GraphQlOperationConfig
// Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
type GoogleCloudApigeeV1GraphQlOperationConfig struct {
	APISource  *string                               `json:"apiSource,omitempty"`
	Attributes []GoogleCloudApigeeV1Attribute        `json:"attributes,omitempty"`
	Operations []GoogleCloudApigeeV1GraphQlOperation `json:"operations,omitempty"`
	Quota      *GoogleCloudApigeeV1Quota             `json:"quota,omitempty"`
}
