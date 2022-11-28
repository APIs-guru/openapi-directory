package shared

// GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse
// Response message for BeyondCorp.ListAppConnections.
type GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse struct {
	AppConnections []GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection `json:"appConnections,omitempty"`
	NextPageToken  *string                                                   `json:"nextPageToken,omitempty"`
	Unreachable    []string                                                  `json:"unreachable,omitempty"`
}
