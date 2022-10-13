package shared

type Parent struct {
	ID     *string `json:"id"`
	IsRoot *bool   `json:"isRoot"`
	Title  *string `json:"title"`
}
