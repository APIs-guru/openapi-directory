package shared

type ListHandshakesForAccountResponse struct {
	Handshakes []Handshake `json:"Handshakes"`
	NextToken  *string     `json:"NextToken"`
}
