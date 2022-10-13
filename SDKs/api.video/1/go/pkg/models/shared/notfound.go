package shared

type NotFound struct {
	Name   *string `json:"name"`
	Status *int64  `json:"status"`
	Title  *string `json:"title"`
	Type   *string `json:"type"`
}
