package shared

type HandshakeFilter struct {
	ActionType        *ActionTypeEnum `json:"ActionType,omitempty"`
	ParentHandshakeID *string         `json:"ParentHandshakeId,omitempty"`
}
