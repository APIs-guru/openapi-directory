package shared

type GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest struct {
	RequestID    *string                                           `json:"requestId"`
	ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo `json:"resourceInfo"`
	ValidateOnly *bool                                             `json:"validateOnly"`
}
