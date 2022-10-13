package shared

type Error struct {
	Detail *string `json:"detail"`
	Status int32   `json:"status"`
	Title  string  `json:"title"`
	Type   string  `json:"type"`
}
