package shared

type APIResourceLinkedResources struct {
	ID              *string `json:"id"`
	UnifiedProperty *string `json:"unified_property"`
}

type APIResource struct {
	ID              *string                      `json:"id"`
	LinkedResources []APIResourceLinkedResources `json:"linked_resources"`
	Name            *string                      `json:"name"`
	Schema          map[string]interface{}       `json:"schema"`
	Status          *ResourceStatusEnum          `json:"status"`
}
