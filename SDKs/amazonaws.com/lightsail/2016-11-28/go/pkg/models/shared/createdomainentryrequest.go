package shared



type CreateDomainEntryRequest struct {
    DomainEntry DomainEntry `json:"domainEntry"`
    DomainName string `json:"domainName"`
    
}

