package shared

type GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse struct {
	AppConnectors []GoogleCloudBeyondcorpAppconnectorsV1AppConnector `json:"appConnectors,omitempty"`
	NextPageToken *string                                            `json:"nextPageToken,omitempty"`
	Unreachable   []string                                           `json:"unreachable,omitempty"`
}
