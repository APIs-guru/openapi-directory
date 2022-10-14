package shared

type CreateTagModel struct {
	Color *string `json:"color,omitempty"`
	Name  string  `json:"name"`
}
