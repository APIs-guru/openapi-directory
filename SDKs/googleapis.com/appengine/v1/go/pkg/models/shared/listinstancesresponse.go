package shared

// ListInstancesResponse
// Response message for Instances.ListInstances.
type ListInstancesResponse struct {
	Instances     []Instance `json:"instances,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
