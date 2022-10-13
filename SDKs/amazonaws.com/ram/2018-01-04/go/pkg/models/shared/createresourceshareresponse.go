package shared

type CreateResourceShareResponse struct {
	ClientToken   *string        `json:"clientToken"`
	ResourceShare *ResourceShare `json:"resourceShare"`
}
