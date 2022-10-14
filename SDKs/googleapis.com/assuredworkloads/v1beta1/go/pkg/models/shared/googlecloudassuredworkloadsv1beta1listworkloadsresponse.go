package shared

type GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse struct {
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
	Workloads     []GoogleCloudAssuredworkloadsV1beta1Workload `json:"workloads,omitempty"`
}
