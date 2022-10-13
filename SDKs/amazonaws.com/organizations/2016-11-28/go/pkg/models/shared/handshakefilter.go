package shared

type HandshakeFilter struct {
	ActionType        *ActionTypeEnum `json:"ActionType"`
	ParentHandshakeID *string         `json:"ParentHandshakeId"`
}
