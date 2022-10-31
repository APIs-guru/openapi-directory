package shared

type GoogleAnalyticsAdminV1alphaListAudiencesResponse struct {
	Audiences     []GoogleAnalyticsAdminV1alphaAudience `json:"audiences,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
