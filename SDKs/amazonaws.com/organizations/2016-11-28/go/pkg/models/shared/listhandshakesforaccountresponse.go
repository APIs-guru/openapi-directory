package shared

type ListHandshakesForAccountResponse struct {
	Handshakes []Handshake `json:"Handshakes,omitempty"`
	NextToken  *string     `json:"NextToken,omitempty"`
}
