package shared

// GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest
// Request report the connector status.
type GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest struct {
	RequestID    *string                                           `json:"requestId,omitempty"`
	ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo `json:"resourceInfo,omitempty"`
	ValidateOnly *bool                                             `json:"validateOnly,omitempty"`
}
