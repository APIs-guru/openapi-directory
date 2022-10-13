package shared

type CtaSettings struct {
	BackgroundColor       *string `json:"background_color"`
	ButtonBackgroundColor *string `json:"button_background_color"`
	ButtonColor           *string `json:"button_color"`
	ButtonLabel           *string `json:"button_label"`
	ButtonLink            *string `json:"button_link"`
	Color                 *string `json:"color"`
	Description           *string `json:"description"`
	Enabled               *bool   `json:"enabled"`
	Title                 *string `json:"title"`
}
