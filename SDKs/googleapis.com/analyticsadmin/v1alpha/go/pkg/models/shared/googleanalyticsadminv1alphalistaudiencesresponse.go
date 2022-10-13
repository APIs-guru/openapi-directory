package shared

type GoogleAnalyticsAdminV1alphaListAudiencesResponse struct {
	Audiences     []GoogleAnalyticsAdminV1alphaAudience `json:"audiences"`
	NextPageToken *string                               `json:"nextPageToken"`
}
