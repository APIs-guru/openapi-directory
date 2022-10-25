package shared

type GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse struct {
	FirebaseLinks []GoogleAnalyticsAdminV1alphaFirebaseLink `json:"firebaseLinks,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
