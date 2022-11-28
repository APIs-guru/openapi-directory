package shared

// IdentityProviderDetails
// Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
type IdentityProviderDetails struct {
	DirectoryID    *string `json:"DirectoryId,omitempty"`
	InvocationRole *string `json:"InvocationRole,omitempty"`
	URL            *string `json:"Url,omitempty"`
}
