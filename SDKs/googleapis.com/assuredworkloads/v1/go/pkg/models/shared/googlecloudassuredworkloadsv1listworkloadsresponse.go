package shared

// GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
// Response of ListWorkloads endpoint.
type GoogleCloudAssuredworkloadsV1ListWorkloadsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Workloads     []GoogleCloudAssuredworkloadsV1Workload `json:"workloads,omitempty"`
}
