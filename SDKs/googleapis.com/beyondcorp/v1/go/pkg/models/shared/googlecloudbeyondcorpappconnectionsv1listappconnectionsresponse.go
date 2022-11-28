package shared

// GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse
// Response message for BeyondCorp.ListAppConnections.
type GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse struct {
	AppConnections []GoogleCloudBeyondcorpAppconnectionsV1AppConnection `json:"appConnections,omitempty"`
	NextPageToken  *string                                              `json:"nextPageToken,omitempty"`
	Unreachable    []string                                             `json:"unreachable,omitempty"`
}
