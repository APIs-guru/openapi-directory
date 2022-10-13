package shared

type LaunchProfileMembership struct {
	IdentityStoreID *string                   `json:"identityStoreId"`
	Persona         *LaunchProfilePersonaEnum `json:"persona"`
	PrincipalID     *string                   `json:"principalId"`
}
