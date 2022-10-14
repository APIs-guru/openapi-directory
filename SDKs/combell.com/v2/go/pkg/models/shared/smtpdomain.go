package shared

type SMTPDomain struct {
	Enabled  *bool   `json:"enabled,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
}
