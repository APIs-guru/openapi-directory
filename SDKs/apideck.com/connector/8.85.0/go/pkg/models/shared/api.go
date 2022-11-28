package shared

type APIResources struct {
	ExcludedFromCoverage *bool               `json:"excluded_from_coverage,omitempty"`
	ID                   *string             `json:"id,omitempty"`
	Name                 *string             `json:"name,omitempty"`
	Status               *ResourceStatusEnum `json:"status,omitempty"`
}

type APITypeEnum string

const (
	APITypeEnumPlatform APITypeEnum = "platform"
	APITypeEnumUnified  APITypeEnum = "unified"
)

type API struct {
	APIReferenceURL     *string        `json:"api_reference_url,omitempty"`
	Categories          []string       `json:"categories,omitempty"`
	Description         *string        `json:"description,omitempty"`
	Events              []string       `json:"events,omitempty"`
	ID                  *string        `json:"id,omitempty"`
	Name                *string        `json:"name,omitempty"`
	PostmanCollectionID *string        `json:"postman_collection_id,omitempty"`
	Resources           []APIResources `json:"resources,omitempty"`
	SpecURL             *string        `json:"spec_url,omitempty"`
	Status              *APIStatusEnum `json:"status,omitempty"`
	Type                *APITypeEnum   `json:"type,omitempty"`
}
