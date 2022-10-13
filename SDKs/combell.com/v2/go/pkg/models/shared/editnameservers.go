package shared

type EditNameServers struct {
	DomainName  *string  `json:"domain_name"`
	NameServers []string `json:"name_servers"`
}
