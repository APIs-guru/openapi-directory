package shared



type EditNameServers struct {
    DomainName *string `json:"domain_name,omitempty"`
    NameServers []string `json:"name_servers,omitempty"`
    
}

