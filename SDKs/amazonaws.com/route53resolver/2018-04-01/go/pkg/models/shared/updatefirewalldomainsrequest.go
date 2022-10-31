package shared



type UpdateFirewallDomainsRequest struct {
    Domains []string `json:"Domains"`
    FirewallDomainListID string `json:"FirewallDomainListId"`
    Operation FirewallDomainUpdateOperationEnum `json:"Operation"`
    
}

