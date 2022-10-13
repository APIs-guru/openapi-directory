package shared

type GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse struct {
	NextPageToken *string                                      `json:"nextPageToken"`
	Workloads     []GoogleCloudAssuredworkloadsV1beta1Workload `json:"workloads"`
}
