package shared



type Domains struct {
    CreationTime *string `json:"creationTime,omitempty"`
    DomainAliases []DomainAlias `json:"domainAliases,omitempty"`
    DomainName *string `json:"domainName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    IsPrimary *bool `json:"isPrimary,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Verified *bool `json:"verified,omitempty"`
    
}

