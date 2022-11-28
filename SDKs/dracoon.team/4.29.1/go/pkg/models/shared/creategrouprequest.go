package shared

// CreateGroupRequest
// Request model for creating a group
type CreateGroupRequest struct {
	Expiration *ObjectExpiration `json:"expiration,omitempty"`
	Name       string            `json:"name"`
}
