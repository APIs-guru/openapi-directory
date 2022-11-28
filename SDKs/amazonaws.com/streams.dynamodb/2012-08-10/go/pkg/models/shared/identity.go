package shared

// Identity
// Contains details about the type of identity that made the request.
type Identity struct {
	PrincipalID *string `json:"PrincipalId,omitempty"`
	Type        *string `json:"Type,omitempty"`
}
