package shared

// GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
// Response message for AuditUserLinks RPC.
type GoogleAnalyticsAdminV1alphaAuditUserLinksResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	UserLinks     []GoogleAnalyticsAdminV1alphaAuditUserLink `json:"userLinks,omitempty"`
}
