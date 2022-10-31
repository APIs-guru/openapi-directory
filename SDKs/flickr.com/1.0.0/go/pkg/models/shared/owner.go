package shared



type Owner struct {
    Iconfarm *string `json:"iconfarm,omitempty"`
    Iconserver *string `json:"iconserver,omitempty"`
    IsAdFree *bool `json:"is_ad_free,omitempty"`
    Ispro *bool `json:"ispro,omitempty"`
    Location *string `json:"location,omitempty"`
    Noindexfollow *bool `json:"noindexfollow,omitempty"`
    Nsid *string `json:"nsid,omitempty"`
    PathAlias *string `json:"path_alias,omitempty"`
    Realname *string `json:"realname,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

