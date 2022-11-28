package shared

// AccountTicket
// JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
type AccountTicket struct {
	Account     *Account     `json:"account,omitempty"`
	ID          *string      `json:"id,omitempty"`
	Kind        *string      `json:"kind,omitempty"`
	Profile     *Profile     `json:"profile,omitempty"`
	RedirectURI *string      `json:"redirectUri,omitempty"`
	Webproperty *Webproperty `json:"webproperty,omitempty"`
}

// AccountTicketInput
// JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
type AccountTicketInput struct {
	Account     *Account1         `json:"account,omitempty"`
	ID          *string           `json:"id,omitempty"`
	Kind        *string           `json:"kind,omitempty"`
	Profile     *ProfileInput     `json:"profile,omitempty"`
	RedirectURI *string           `json:"redirectUri,omitempty"`
	Webproperty *WebpropertyInput `json:"webproperty,omitempty"`
}
