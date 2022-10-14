package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse struct {
	AppConnections []GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection `json:"appConnections,omitempty"`
	NextPageToken  *string                                                   `json:"nextPageToken,omitempty"`
	Unreachable    []string                                                  `json:"unreachable,omitempty"`
}
