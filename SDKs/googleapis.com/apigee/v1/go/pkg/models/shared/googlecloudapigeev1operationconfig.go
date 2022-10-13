package shared

type GoogleCloudApigeeV1OperationConfig struct {
	APISource  *string                        `json:"apiSource"`
	Attributes []GoogleCloudApigeeV1Attribute `json:"attributes"`
	Operations []GoogleCloudApigeeV1Operation `json:"operations"`
	Quota      *GoogleCloudApigeeV1Quota      `json:"quota"`
}
