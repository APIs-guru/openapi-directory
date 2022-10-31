package shared



type UpdateDomainEntryRequest struct {
    DomainEntry DomainEntry `json:"domainEntry"`
    DomainName string `json:"domainName"`
    
}

