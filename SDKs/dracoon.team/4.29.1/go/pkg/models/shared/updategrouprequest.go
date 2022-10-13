package shared

type UpdateGroupRequest struct {
	Expiration *ObjectExpiration `json:"expiration"`
	Name       *string           `json:"name"`
}
