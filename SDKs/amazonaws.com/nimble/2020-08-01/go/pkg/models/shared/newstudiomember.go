package shared

type NewStudioMember struct {
	Persona     StudioPersonaEnum `json:"persona"`
	PrincipalID string            `json:"principalId"`
}
