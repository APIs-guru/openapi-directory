package shared



type ListDomainMappingsResponse struct {
    DomainMappings []DomainMapping `json:"domainMappings,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

