package shared

type GetDomainsResult struct {
	Domains       []Domain `json:"domains"`
	NextPageToken *string  `json:"nextPageToken"`
}
