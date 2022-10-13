package shared

type HandshakeParty struct {
	ID   string                 `json:"Id"`
	Type HandshakePartyTypeEnum `json:"Type"`
}
