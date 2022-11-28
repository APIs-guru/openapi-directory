package shared

// GoogleCloudApigeeV1ListInstancesResponse
// Response for ListInstances.
type GoogleCloudApigeeV1ListInstancesResponse struct {
	Instances     []GoogleCloudApigeeV1Instance `json:"instances,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
