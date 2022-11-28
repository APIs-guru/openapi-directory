package shared

// GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest
// Request report the connector status.
type GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest struct {
	RequestID    *string                                                `json:"requestId,omitempty"`
	ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo `json:"resourceInfo,omitempty"`
	ValidateOnly *bool                                                  `json:"validateOnly,omitempty"`
}
