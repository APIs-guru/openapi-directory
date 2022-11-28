package shared

// AssumeRoleWithSamlResponse
// Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type AssumeRoleWithSamlResponse struct {
	AssumedRoleUser  *AssumedRoleUser
	Audience         *string
	Credentials      *Credentials
	Issuer           *string
	NameQualifier    *string
	PackedPolicySize *int64
	SourceIdentity   *string
	Subject          *string
	SubjectType      *string
}
