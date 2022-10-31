package shared

type ListEnrollmentTokensResponse struct {
	EnrollmentTokens []EnrollmentToken `json:"enrollmentTokens,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
