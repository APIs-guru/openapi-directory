package shared

type UserName struct {
	FamilyName *string `json:"familyName"`
	FullName   *string `json:"fullName"`
	GivenName  *string `json:"givenName"`
}
