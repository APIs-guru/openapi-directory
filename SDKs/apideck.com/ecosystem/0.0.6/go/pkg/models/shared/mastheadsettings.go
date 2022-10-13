package shared

type MastheadSettings struct {
	Background      *string `json:"background"`
	BackgroundColor *string `json:"background_color"`
	Color           *string `json:"color"`
	Columns         *int64  `json:"columns"`
	Description     *string `json:"description"`
	Title           *string `json:"title"`
}
