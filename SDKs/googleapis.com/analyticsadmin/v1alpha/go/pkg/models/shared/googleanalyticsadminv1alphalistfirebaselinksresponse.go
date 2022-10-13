package shared

type GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse struct {
	FirebaseLinks []GoogleAnalyticsAdminV1alphaFirebaseLink `json:"firebaseLinks"`
	NextPageToken *string                                   `json:"nextPageToken"`
}
