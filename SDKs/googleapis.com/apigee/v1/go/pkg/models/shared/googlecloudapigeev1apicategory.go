package shared

// GoogleCloudApigeeV1APICategory
// the Api category resource wrapped with response status, error_code etc.
type GoogleCloudApigeeV1APICategory struct {
	Data      *GoogleCloudApigeeV1APICategoryData `json:"data,omitempty"`
	ErrorCode *string                             `json:"errorCode,omitempty"`
	Message   *string                             `json:"message,omitempty"`
	RequestID *string                             `json:"requestId,omitempty"`
	Status    *string                             `json:"status,omitempty"`
}
