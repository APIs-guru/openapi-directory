package shared

// HandshakeParty
// Identifies a participant in a handshake.
type HandshakeParty struct {
	ID   string                 `json:"Id"`
	Type HandshakePartyTypeEnum `json:"Type"`
}
