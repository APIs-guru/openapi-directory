package shared

type SMTPDomain struct {
	Enabled  *bool   `json:"enabled"`
	Hostname *string `json:"hostname"`
}
