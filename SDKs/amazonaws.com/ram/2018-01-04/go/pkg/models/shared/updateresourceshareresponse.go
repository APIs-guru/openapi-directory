package shared

type UpdateResourceShareResponse struct {
	ClientToken   *string        `json:"clientToken"`
	ResourceShare *ResourceShare `json:"resourceShare"`
}
