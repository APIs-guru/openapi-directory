package shared

// GetSessionTokenResponse
// Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type GetSessionTokenResponse struct {
	Credentials *Credentials
}
