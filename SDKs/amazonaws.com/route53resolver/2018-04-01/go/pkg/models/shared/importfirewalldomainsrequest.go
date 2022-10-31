package shared



type ImportFirewallDomainsRequest struct {
    DomainFileURL string `json:"DomainFileUrl"`
    FirewallDomainListID string `json:"FirewallDomainListId"`
    Operation FirewallDomainImportOperationEnum `json:"Operation"`
    
}

