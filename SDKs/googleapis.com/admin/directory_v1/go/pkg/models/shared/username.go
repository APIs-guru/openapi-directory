package shared

type UserName struct {
	DisplayName *string `json:"displayName,omitempty"`
	FamilyName  *string `json:"familyName,omitempty"`
	FullName    *string `json:"fullName,omitempty"`
	GivenName   *string `json:"givenName,omitempty"`
}
