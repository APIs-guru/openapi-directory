package shared

type GoogleAnalyticsAdminV1alphaAuditUserLinksResponse struct {
	NextPageToken *string                                    `json:"nextPageToken"`
	UserLinks     []GoogleAnalyticsAdminV1alphaAuditUserLink `json:"userLinks"`
}
