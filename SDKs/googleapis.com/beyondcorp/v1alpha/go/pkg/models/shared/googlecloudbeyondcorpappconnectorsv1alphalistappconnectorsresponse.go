package shared

// GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse
// Response message for BeyondCorp.ListAppConnectors.
type GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse struct {
	AppConnectors []GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector `json:"appConnectors,omitempty"`
	NextPageToken *string                                                 `json:"nextPageToken,omitempty"`
	Unreachable   []string                                                `json:"unreachable,omitempty"`
}
