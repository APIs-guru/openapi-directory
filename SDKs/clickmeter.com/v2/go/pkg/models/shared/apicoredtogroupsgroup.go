package shared



type APICoreDtoGroupsGroup struct {
    CreationDate *string `json:"creationDate,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsPublic *bool `json:"isPublic,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Preferred *bool `json:"preferred,omitempty"`
    RedirectOnly *bool `json:"redirectOnly,omitempty"`
    Tags []APICoreDtoTagsTag `json:"tags,omitempty"`
    WritePermited *bool `json:"writePermited,omitempty"`
    
}

