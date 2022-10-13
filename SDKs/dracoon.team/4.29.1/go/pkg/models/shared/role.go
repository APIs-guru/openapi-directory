package shared

type Role struct {
	Description string  `json:"description"`
	ID          int32   `json:"id"`
	Items       []Right `json:"items"`
	Name        string  `json:"name"`
}
