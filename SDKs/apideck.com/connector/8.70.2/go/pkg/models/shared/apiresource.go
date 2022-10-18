package shared

type APIResourceLinkedResources struct {
	ID              *string `json:"id,omitempty"`
	UnifiedProperty *string `json:"unified_property,omitempty"`
}

type APIResource struct {
	ID              *string                      `json:"id,omitempty"`
	LinkedResources []APIResourceLinkedResources `json:"linked_resources,omitempty"`
	Name            *string                      `json:"name,omitempty"`
	Schema          map[string]interface{}       `json:"schema,omitempty"`
	Status          *ResourceStatusEnum          `json:"status,omitempty"`
}
