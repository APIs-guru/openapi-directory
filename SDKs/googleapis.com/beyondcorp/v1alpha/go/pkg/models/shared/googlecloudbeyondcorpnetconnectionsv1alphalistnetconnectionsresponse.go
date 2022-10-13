package shared

type GoogleCloudBeyondcorpNetconnectionsV1alphaListNetConnectionsResponse struct {
	NetConnections []GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection `json:"netConnections"`
	NextPageToken  *string                                                   `json:"nextPageToken"`
	Unreachable    []string                                                  `json:"unreachable"`
}
