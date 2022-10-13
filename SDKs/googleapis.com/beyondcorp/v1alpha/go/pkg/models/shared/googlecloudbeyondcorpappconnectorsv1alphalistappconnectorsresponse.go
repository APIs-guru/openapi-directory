package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse struct {
	AppConnectors []GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector `json:"appConnectors"`
	NextPageToken *string                                                 `json:"nextPageToken"`
	Unreachable   []string                                                `json:"unreachable"`
}
