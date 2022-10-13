package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest struct {
	RequestID    *string                                                `json:"requestId"`
	ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo `json:"resourceInfo"`
	ValidateOnly *bool                                                  `json:"validateOnly"`
}
