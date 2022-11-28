package shared

// UpdateGroupRequest
// Request model for updating group's metadata
type UpdateGroupRequest struct {
	Expiration *ObjectExpiration `json:"expiration,omitempty"`
	Name       *string           `json:"name,omitempty"`
}
