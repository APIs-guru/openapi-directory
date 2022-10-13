package shared

type RegisterDomain struct {
	DomainName  *string          `json:"domain_name"`
	NameServers []string         `json:"name_servers"`
	Registrant  *RegistrantInput `json:"registrant"`
}
