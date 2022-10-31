package shared

type StudioMembership struct {
	IdentityStoreID *string            `json:"identityStoreId,omitempty"`
	Persona         *StudioPersonaEnum `json:"persona,omitempty"`
	PrincipalID     *string            `json:"principalId,omitempty"`
}
