package shared

type MethodSelector struct {
	Method     *string `json:"method,omitempty"`
	Permission *string `json:"permission,omitempty"`
}
