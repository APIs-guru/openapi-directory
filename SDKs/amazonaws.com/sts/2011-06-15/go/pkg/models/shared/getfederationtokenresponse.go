package shared

// GetFederationTokenResponse
// Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type GetFederationTokenResponse struct {
	Credentials      *Credentials
	FederatedUser    *FederatedUser
	PackedPolicySize *int64
}
