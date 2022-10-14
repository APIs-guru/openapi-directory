package shared

type DomainInfos struct {
	DomainInfos   []DomainInfo `json:"domainInfos"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
