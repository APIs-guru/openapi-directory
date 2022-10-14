package shared

type CreateDomainRequest struct {
	DomainName string `json:"domainName"`
	Tags       []Tag  `json:"tags,omitempty"`
}
