package shared



type GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse struct {
    AppConnectionDetails []GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails `json:"appConnectionDetails,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

