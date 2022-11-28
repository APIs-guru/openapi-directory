package shared

// DataLakePrincipal
// The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.
type DataLakePrincipal struct {
	DataLakePrincipalIdentifier *string `json:"DataLakePrincipalIdentifier,omitempty"`
}
