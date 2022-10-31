package shared

type AcceptResourceShareInvitationResponse struct {
	ClientToken             *string                  `json:"clientToken,omitempty"`
	ResourceShareInvitation *ResourceShareInvitation `json:"resourceShareInvitation,omitempty"`
}
