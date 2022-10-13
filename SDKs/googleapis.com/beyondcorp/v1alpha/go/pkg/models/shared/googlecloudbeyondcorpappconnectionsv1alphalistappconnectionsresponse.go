package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse struct {
	AppConnections []GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection `json:"appConnections"`
	NextPageToken  *string                                                   `json:"nextPageToken"`
	Unreachable    []string                                                  `json:"unreachable"`
}
