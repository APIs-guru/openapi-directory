package shared

type ListDomainMappingsResponse struct {
	DomainMappings []DomainMapping `json:"domainMappings"`
	NextPageToken  *string         `json:"nextPageToken"`
}
