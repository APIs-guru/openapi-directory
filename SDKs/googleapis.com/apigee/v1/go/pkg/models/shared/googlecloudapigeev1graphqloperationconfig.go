package shared

type GoogleCloudApigeeV1GraphQlOperationConfig struct {
	APISource  *string                               `json:"apiSource,omitempty"`
	Attributes []GoogleCloudApigeeV1Attribute        `json:"attributes,omitempty"`
	Operations []GoogleCloudApigeeV1GraphQlOperation `json:"operations,omitempty"`
	Quota      *GoogleCloudApigeeV1Quota             `json:"quota,omitempty"`
}
