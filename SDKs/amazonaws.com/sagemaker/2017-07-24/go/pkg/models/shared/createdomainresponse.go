package shared

type CreateDomainResponse struct {
	DomainArn *string `json:"DomainArn,omitempty"`
	URL       *string `json:"Url,omitempty"`
}
