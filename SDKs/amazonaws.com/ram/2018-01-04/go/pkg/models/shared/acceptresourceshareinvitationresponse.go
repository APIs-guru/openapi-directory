package shared

type AcceptResourceShareInvitationResponse struct {
	ClientToken             *string                  `json:"clientToken"`
	ResourceShareInvitation *ResourceShareInvitation `json:"resourceShareInvitation"`
}
