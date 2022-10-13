package shared

type ListEnrollmentTokensResponse struct {
	EnrollmentTokens []EnrollmentToken `json:"enrollmentTokens"`
	NextPageToken    *string           `json:"nextPageToken"`
}
