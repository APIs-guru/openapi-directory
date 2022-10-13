package shared

type GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse struct {
	AppConnections []GoogleCloudBeyondcorpAppconnectionsV1AppConnection `json:"appConnections"`
	NextPageToken  *string                                              `json:"nextPageToken"`
	Unreachable    []string                                             `json:"unreachable"`
}
