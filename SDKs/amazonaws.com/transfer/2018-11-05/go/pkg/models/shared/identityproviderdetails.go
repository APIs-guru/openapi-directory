package shared

type IdentityProviderDetails struct {
	DirectoryID    *string `json:"DirectoryId"`
	InvocationRole *string `json:"InvocationRole"`
	URL            *string `json:"Url"`
}
