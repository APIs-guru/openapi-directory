package shared

type GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse struct {
	AppConnectors []GoogleCloudBeyondcorpAppconnectorsV1AppConnector `json:"appConnectors"`
	NextPageToken *string                                            `json:"nextPageToken"`
	Unreachable   []string                                           `json:"unreachable"`
}
