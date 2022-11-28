package shared

// GoogleAnalyticsAdminV1alphaListDataStreamsResponse
// Response message for ListDataStreams RPC.
type GoogleAnalyticsAdminV1alphaListDataStreamsResponse struct {
	DataStreams   []GoogleAnalyticsAdminV1alphaDataStream `json:"dataStreams,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
