package shared



type GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse struct {
    AppConnectionDetails []GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails `json:"appConnectionDetails,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

