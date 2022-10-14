package shared

type RegisterDomain struct {
	DomainName  *string          `json:"domain_name,omitempty"`
	NameServers []string         `json:"name_servers,omitempty"`
	Registrant  *RegistrantInput `json:"registrant,omitempty"`
}
