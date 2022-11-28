package shared

// DomainInfos
// Contains a paginated collection of DomainInfo structures.
type DomainInfos struct {
	DomainInfos   []DomainInfo `json:"domainInfos"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
