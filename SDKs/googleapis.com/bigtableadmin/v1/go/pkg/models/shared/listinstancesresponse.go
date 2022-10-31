package shared

type ListInstancesResponse struct {
	FailedLocations []string   `json:"failedLocations,omitempty"`
	Instances       []Instance `json:"instances,omitempty"`
	NextPageToken   *string    `json:"nextPageToken,omitempty"`
}
