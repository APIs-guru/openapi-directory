package shared

// AsanaResource
// A generic Asana Resource, containing a globally unique identifier.
type AsanaResource struct {
	Gid          *string `json:"gid,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
