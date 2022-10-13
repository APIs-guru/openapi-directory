package shared

type CreateGroupRequest struct {
	Expiration *ObjectExpiration `json:"expiration"`
	Name       string            `json:"name"`
}
