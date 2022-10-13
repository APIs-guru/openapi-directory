package shared

type InviteAccountToOrganizationRequest struct {
	Notes  *string        `json:"Notes"`
	Tags   []Tag          `json:"Tags"`
	Target HandshakeParty `json:"Target"`
}
