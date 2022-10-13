package shared

type GoogleCloudAssuredworkloadsV1ListWorkloadsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken"`
	Workloads     []GoogleCloudAssuredworkloadsV1Workload `json:"workloads"`
}
