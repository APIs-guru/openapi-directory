package shared

type GoogleCloudBeyondcorpNetconnectionsV1alphaListNetConnectionsResponse struct {
	NetConnections []GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection `json:"netConnections,omitempty"`
	NextPageToken  *string                                                   `json:"nextPageToken,omitempty"`
	Unreachable    []string                                                  `json:"unreachable,omitempty"`
}
