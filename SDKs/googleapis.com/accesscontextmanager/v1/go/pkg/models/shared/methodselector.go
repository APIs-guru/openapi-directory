package shared

// MethodSelector
// An allowed method or permission of a service specified in ApiOperation.
type MethodSelector struct {
	Method     *string `json:"method,omitempty"`
	Permission *string `json:"permission,omitempty"`
}
