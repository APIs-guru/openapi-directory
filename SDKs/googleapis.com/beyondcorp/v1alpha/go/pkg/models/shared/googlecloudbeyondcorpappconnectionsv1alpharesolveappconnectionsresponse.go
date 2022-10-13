package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse struct {
	AppConnectionDetails []GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails `json:"appConnectionDetails"`
	NextPageToken        *string                                                                                       `json:"nextPageToken"`
	Unreachable          []string                                                                                      `json:"unreachable"`
}
