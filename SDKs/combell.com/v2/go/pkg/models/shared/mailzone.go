package shared

type MailZone struct {
	Aliases           []Alias           `json:"aliases,omitempty"`
	AntiSpam          *AntiSpam         `json:"anti_spam,omitempty"`
	AvailableAccounts []MailZoneAccount `json:"available_accounts,omitempty"`
	CatchAll          *CatchAll         `json:"catch_all,omitempty"`
	Enabled           *bool             `json:"enabled,omitempty"`
	Name              *string           `json:"name,omitempty"`
	SMTPDomains       []SMTPDomain      `json:"smtp_domains,omitempty"`
}
