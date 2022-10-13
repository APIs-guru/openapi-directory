package shared

type DomainAliases struct {
	DomainAliases []DomainAlias `json:"domainAliases"`
	Etag          *string       `json:"etag"`
	Kind          *string       `json:"kind"`
}
