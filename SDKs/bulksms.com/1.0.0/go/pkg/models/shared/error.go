package shared

type Error struct {
	Detail *string `json:"detail,omitempty"`
	Status int32   `json:"status"`
	Title  string  `json:"title"`
	Type   string  `json:"type"`
}
