package shared



type Site struct {
    AccountID *string `json:"AccountId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    SiteArn *string `json:"SiteArn,omitempty"`
    SiteID *string `json:"SiteId,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

