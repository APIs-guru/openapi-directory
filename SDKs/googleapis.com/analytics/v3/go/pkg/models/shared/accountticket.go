package shared

type AccountTicket struct {
	Account     *Account     `json:"account"`
	ID          *string      `json:"id"`
	Kind        *string      `json:"kind"`
	Profile     *Profile     `json:"profile"`
	RedirectURI *string      `json:"redirectUri"`
	Webproperty *Webproperty `json:"webproperty"`
}
