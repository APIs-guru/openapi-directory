package shared

type GoogleCloudApigeeV1APIResponseWrapper struct {
	ErrorCode *string `json:"errorCode"`
	Message   *string `json:"message"`
	RequestID *string `json:"requestId"`
	Status    *string `json:"status"`
}
