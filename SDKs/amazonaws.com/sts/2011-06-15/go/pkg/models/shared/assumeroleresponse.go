package shared

// AssumeRoleResponse
// Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type AssumeRoleResponse struct {
	AssumedRoleUser  *AssumedRoleUser
	Credentials      *Credentials
	PackedPolicySize *int64
	SourceIdentity   *string
}
