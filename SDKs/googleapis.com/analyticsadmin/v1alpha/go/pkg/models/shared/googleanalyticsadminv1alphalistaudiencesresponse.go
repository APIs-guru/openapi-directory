package shared

// GoogleAnalyticsAdminV1alphaListAudiencesResponse
// Response message for ListAudiences RPC.
type GoogleAnalyticsAdminV1alphaListAudiencesResponse struct {
	Audiences     []GoogleAnalyticsAdminV1alphaAudience `json:"audiences,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
