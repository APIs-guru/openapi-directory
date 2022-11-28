package shared

// Limit
// Specifies how many protections of a given type you can create.
type Limit struct {
	Max  *int64  `json:"Max,omitempty"`
	Type *string `json:"Type,omitempty"`
}
