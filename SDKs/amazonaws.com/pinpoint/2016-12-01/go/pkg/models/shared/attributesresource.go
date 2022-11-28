package shared

// AttributesResource
// Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
type AttributesResource struct {
	ApplicationID string   `json:"ApplicationId"`
	AttributeType string   `json:"AttributeType"`
	Attributes    []string `json:"Attributes,omitempty"`
}
