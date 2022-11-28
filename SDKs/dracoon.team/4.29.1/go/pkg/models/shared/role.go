package shared

// Role
// Role information
type Role struct {
	Description string  `json:"description"`
	ID          int32   `json:"id"`
	Items       []Right `json:"items,omitempty"`
	Name        string  `json:"name"`
}
