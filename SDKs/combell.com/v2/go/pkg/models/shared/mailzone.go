package shared

type MailZone struct {
	Aliases           []Alias           `json:"aliases"`
	AntiSpam          *AntiSpam         `json:"anti_spam"`
	AvailableAccounts []MailZoneAccount `json:"available_accounts"`
	CatchAll          *CatchAll         `json:"catch_all"`
	Enabled           *bool             `json:"enabled"`
	Name              *string           `json:"name"`
	SMTPDomains       []SMTPDomain      `json:"smtp_domains"`
}
