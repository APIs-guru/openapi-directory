package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest struct {
	RequestID    *string                                                `json:"requestId,omitempty"`
	ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo `json:"resourceInfo,omitempty"`
	ValidateOnly *bool                                                  `json:"validateOnly,omitempty"`
}
