package shared

// AssumeRoleWithWebIdentityResponse
// Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type AssumeRoleWithWebIdentityResponse struct {
	AssumedRoleUser             *AssumedRoleUser
	Audience                    *string
	Credentials                 *Credentials
	PackedPolicySize            *int64
	Provider                    *string
	SourceIdentity              *string
	SubjectFromWebIdentityToken *string
}
