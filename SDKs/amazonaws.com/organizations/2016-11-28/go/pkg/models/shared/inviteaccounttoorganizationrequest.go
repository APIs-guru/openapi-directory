package shared

type InviteAccountToOrganizationRequest struct {
	Notes  *string        `json:"Notes,omitempty"`
	Tags   []Tag          `json:"Tags,omitempty"`
	Target HandshakeParty `json:"Target"`
}
