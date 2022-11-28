package shared

// GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse
// Response of ListWorkloads endpoint.
type GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse struct {
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
	Workloads     []GoogleCloudAssuredworkloadsV1beta1Workload `json:"workloads,omitempty"`
}
