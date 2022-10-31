package shared



type WebPropertySummary struct {
    ID *string `json:"id,omitempty"`
    InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Level *string `json:"level,omitempty"`
    Name *string `json:"name,omitempty"`
    Profiles []ProfileSummary `json:"profiles,omitempty"`
    Starred *bool `json:"starred,omitempty"`
    WebsiteURL *string `json:"websiteUrl,omitempty"`
    
}

