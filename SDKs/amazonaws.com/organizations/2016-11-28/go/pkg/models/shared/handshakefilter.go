package shared

// HandshakeFilter
// Specifies the criteria that are used to select the handshakes for the operation.
type HandshakeFilter struct {
	ActionType        *ActionTypeEnum `json:"ActionType,omitempty"`
	ParentHandshakeID *string         `json:"ParentHandshakeId,omitempty"`
}
