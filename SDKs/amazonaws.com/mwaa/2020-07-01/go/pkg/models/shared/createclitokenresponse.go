package shared

type CreateCliTokenResponse struct {
	CliToken          *string `json:"CliToken"`
	WebServerHostname *string `json:"WebServerHostname"`
}
