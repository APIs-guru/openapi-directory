package shared

type StudioMembership struct {
	IdentityStoreID *string            `json:"identityStoreId"`
	Persona         *StudioPersonaEnum `json:"persona"`
	PrincipalID     *string            `json:"principalId"`
}
