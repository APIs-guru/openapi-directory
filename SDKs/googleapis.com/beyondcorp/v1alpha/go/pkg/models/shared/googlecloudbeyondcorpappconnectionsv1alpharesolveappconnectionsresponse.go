package shared

// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse
// Response message for BeyondCorp.ResolveAppConnections.
type GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse struct {
	AppConnectionDetails []GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails `json:"appConnectionDetails,omitempty"`
	NextPageToken        *string                                                                                       `json:"nextPageToken,omitempty"`
	Unreachable          []string                                                                                      `json:"unreachable,omitempty"`
}
