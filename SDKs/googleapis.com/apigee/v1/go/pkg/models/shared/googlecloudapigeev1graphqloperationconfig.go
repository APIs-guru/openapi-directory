package shared

type GoogleCloudApigeeV1GraphQlOperationConfig struct {
	APISource  *string                               `json:"apiSource"`
	Attributes []GoogleCloudApigeeV1Attribute        `json:"attributes"`
	Operations []GoogleCloudApigeeV1GraphQlOperation `json:"operations"`
	Quota      *GoogleCloudApigeeV1Quota             `json:"quota"`
}
