package shared

type ListHandshakesForOrganizationResponse struct {
	Handshakes []Handshake `json:"Handshakes,omitempty"`
	NextToken  *string     `json:"NextToken,omitempty"`
}
