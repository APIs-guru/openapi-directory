package shared

type MastheadSettings struct {
	Background      *string `json:"background,omitempty"`
	BackgroundColor *string `json:"background_color,omitempty"`
	Color           *string `json:"color,omitempty"`
	Columns         *int64  `json:"columns,omitempty"`
	Description     *string `json:"description,omitempty"`
	Title           *string `json:"title,omitempty"`
}
