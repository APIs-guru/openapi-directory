package shared

// GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
// Response message for ListFirebaseLinks RPC
type GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse struct {
	FirebaseLinks []GoogleAnalyticsAdminV1alphaFirebaseLink `json:"firebaseLinks,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
