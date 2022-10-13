package shared

type CreateWebLoginTokenResponse struct {
	WebServerHostname *string `json:"WebServerHostname"`
	WebToken          *string `json:"WebToken"`
}
