package shared

type CreateResourceShareResponse struct {
	ClientToken   *string        `json:"clientToken,omitempty"`
	ResourceShare *ResourceShare `json:"resourceShare,omitempty"`
}
