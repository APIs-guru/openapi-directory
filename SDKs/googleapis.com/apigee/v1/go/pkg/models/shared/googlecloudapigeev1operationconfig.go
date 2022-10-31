package shared



type GoogleCloudApigeeV1OperationConfig struct {
    APISource *string `json:"apiSource,omitempty"`
    Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
    Operations []GoogleCloudApigeeV1Operation `json:"operations,omitempty"`
    Quota *GoogleCloudApigeeV1Quota `json:"quota,omitempty"`
    
}

