package shared

type DeleteDomainEntryRequest struct {
	DomainEntry DomainEntry `json:"domainEntry"`
	DomainName  string      `json:"domainName"`
}
