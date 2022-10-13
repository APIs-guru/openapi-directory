package shared

type CreateAliasRequest struct {
	Destinations []string `json:"destinations"`
	EmailAddress *string  `json:"email_address"`
}
