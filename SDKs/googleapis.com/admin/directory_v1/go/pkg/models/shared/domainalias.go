package shared

type DomainAlias struct {
	CreationTime     *string `json:"creationTime"`
	DomainAliasName  *string `json:"domainAliasName"`
	Etag             *string `json:"etag"`
	Kind             *string `json:"kind"`
	ParentDomainName *string `json:"parentDomainName"`
	Verified         *bool   `json:"verified"`
}
