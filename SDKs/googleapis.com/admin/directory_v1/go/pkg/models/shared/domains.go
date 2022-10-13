package shared

type Domains struct {
	CreationTime  *string       `json:"creationTime"`
	DomainAliases []DomainAlias `json:"domainAliases"`
	DomainName    *string       `json:"domainName"`
	Etag          *string       `json:"etag"`
	IsPrimary     *bool         `json:"isPrimary"`
	Kind          *string       `json:"kind"`
	Verified      *bool         `json:"verified"`
}
