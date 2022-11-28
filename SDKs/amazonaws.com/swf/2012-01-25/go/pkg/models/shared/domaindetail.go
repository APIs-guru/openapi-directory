package shared

// DomainDetail
// Contains details of a domain.
type DomainDetail struct {
	Configuration DomainConfiguration `json:"configuration"`
	DomainInfo    DomainInfo          `json:"domainInfo"`
}
