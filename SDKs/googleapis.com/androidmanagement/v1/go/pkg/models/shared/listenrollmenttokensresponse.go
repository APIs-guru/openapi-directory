package shared

// ListEnrollmentTokensResponse
// Response to a request to list enrollment tokens for a given enterprise.
type ListEnrollmentTokensResponse struct {
	EnrollmentTokens []EnrollmentToken `json:"enrollmentTokens,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
