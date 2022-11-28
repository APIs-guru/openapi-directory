package shared

// GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse
// Response message for BeyondCorp.ListAppConnectors.
type GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse struct {
	AppConnectors []GoogleCloudBeyondcorpAppconnectorsV1AppConnector `json:"appConnectors,omitempty"`
	NextPageToken *string                                            `json:"nextPageToken,omitempty"`
	Unreachable   []string                                           `json:"unreachable,omitempty"`
}
