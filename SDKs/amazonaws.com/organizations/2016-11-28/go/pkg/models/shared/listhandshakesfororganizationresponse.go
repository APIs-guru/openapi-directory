package shared

type ListHandshakesForOrganizationResponse struct {
	Handshakes []Handshake `json:"Handshakes"`
	NextToken  *string     `json:"NextToken"`
}
