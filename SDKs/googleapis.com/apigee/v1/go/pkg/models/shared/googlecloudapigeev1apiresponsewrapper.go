package shared

type GoogleCloudApigeeV1APIResponseWrapper struct {
	ErrorCode *string `json:"errorCode,omitempty"`
	Message   *string `json:"message,omitempty"`
	RequestID *string `json:"requestId,omitempty"`
	Status    *string `json:"status,omitempty"`
}
