package shared

type CreateAliasRequest struct {
	Destinations []string `json:"destinations,omitempty"`
	EmailAddress *string  `json:"email_address,omitempty"`
}
