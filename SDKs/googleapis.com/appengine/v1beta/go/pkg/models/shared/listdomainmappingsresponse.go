package shared

// ListDomainMappingsResponse
// Response message for DomainMappings.ListDomainMappings.
type ListDomainMappingsResponse struct {
	DomainMappings []DomainMapping `json:"domainMappings,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
