package shared

type LaunchProfileMembership struct {
	IdentityStoreID *string                   `json:"identityStoreId,omitempty"`
	Persona         *LaunchProfilePersonaEnum `json:"persona,omitempty"`
	PrincipalID     *string                   `json:"principalId,omitempty"`
}
