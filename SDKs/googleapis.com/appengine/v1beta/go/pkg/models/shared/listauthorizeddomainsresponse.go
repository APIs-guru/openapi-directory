package shared

type ListAuthorizedDomainsResponse struct {
	Domains       []AuthorizedDomain `json:"domains,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
