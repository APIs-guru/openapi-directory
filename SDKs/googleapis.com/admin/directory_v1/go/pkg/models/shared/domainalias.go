package shared

type DomainAlias struct {
	CreationTime     *string `json:"creationTime,omitempty"`
	DomainAliasName  *string `json:"domainAliasName,omitempty"`
	Etag             *string `json:"etag,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	ParentDomainName *string `json:"parentDomainName,omitempty"`
	Verified         *bool   `json:"verified,omitempty"`
}
