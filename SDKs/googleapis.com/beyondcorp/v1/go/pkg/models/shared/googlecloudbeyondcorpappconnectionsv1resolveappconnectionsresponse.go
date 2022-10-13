package shared

type GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse struct {
	AppConnectionDetails []GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails `json:"appConnectionDetails"`
	NextPageToken        *string                                                                                  `json:"nextPageToken"`
	Unreachable          []string                                                                                 `json:"unreachable"`
}
