package shared

type AutoForward struct {
	CopyToMyself   *bool    `json:"copy_to_myself"`
	EmailAddresses []string `json:"email_addresses"`
	Enabled        *bool    `json:"enabled"`
}
