package shared

type Alias struct {
	Destinations []string `json:"destinations"`
	EmailAddress *string  `json:"email_address"`
}
