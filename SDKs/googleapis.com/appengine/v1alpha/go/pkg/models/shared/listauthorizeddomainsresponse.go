package shared

// ListAuthorizedDomainsResponse
// Response message for AuthorizedDomains.ListAuthorizedDomains.
type ListAuthorizedDomainsResponse struct {
	Domains       []AuthorizedDomain `json:"domains,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
