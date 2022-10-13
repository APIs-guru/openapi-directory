package shared

type RejectResourceShareInvitationResponse struct {
	ClientToken             *string                  `json:"clientToken"`
	ResourceShareInvitation *ResourceShareInvitation `json:"resourceShareInvitation"`
}
