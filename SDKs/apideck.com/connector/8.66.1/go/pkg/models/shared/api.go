package shared

type APIResources struct {
	ExcludedFromCoverage *bool               `json:"excluded_from_coverage"`
	ID                   *string             `json:"id"`
	Name                 *string             `json:"name"`
	Status               *ResourceStatusEnum `json:"status"`
}

type APITypeEnum string

const (
	APITypeEnumPlatform APITypeEnum = "platform"
	APITypeEnumUnified  APITypeEnum = "unified"
)

type API struct {
	APIReferenceURL     *string        `json:"api_reference_url"`
	Categories          []string       `json:"categories"`
	Description         *string        `json:"description"`
	Events              []string       `json:"events"`
	ID                  *string        `json:"id"`
	Name                *string        `json:"name"`
	PostmanCollectionID *string        `json:"postman_collection_id"`
	Resources           []APIResources `json:"resources"`
	SpecURL             *string        `json:"spec_url"`
	Status              *APIStatusEnum `json:"status"`
	Type                *APITypeEnum   `json:"type"`
}
