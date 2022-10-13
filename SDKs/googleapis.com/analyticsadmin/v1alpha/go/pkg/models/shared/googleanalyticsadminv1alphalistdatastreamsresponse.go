package shared

type GoogleAnalyticsAdminV1alphaListDataStreamsResponse struct {
	DataStreams   []GoogleAnalyticsAdminV1alphaDataStream `json:"dataStreams"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
