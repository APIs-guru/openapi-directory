package shared

type CreateGroupRequest struct {
	Expiration *ObjectExpiration `json:"expiration,omitempty"`
	Name       string            `json:"name"`
}
