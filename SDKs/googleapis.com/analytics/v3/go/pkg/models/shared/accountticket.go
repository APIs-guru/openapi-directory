package shared

type AccountTicket struct {
	Account     *Account     `json:"account,omitempty"`
	ID          *string      `json:"id,omitempty"`
	Kind        *string      `json:"kind,omitempty"`
	Profile     *Profile     `json:"profile,omitempty"`
	RedirectURI *string      `json:"redirectUri,omitempty"`
	Webproperty *Webproperty `json:"webproperty,omitempty"`
}
