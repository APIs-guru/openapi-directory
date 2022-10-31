package shared

type Parent struct {
	ID     *string `json:"id,omitempty"`
	IsRoot *bool   `json:"isRoot,omitempty"`
	Title  *string `json:"title,omitempty"`
}
