package shared

type CardSettings struct {
	BackgroundColor   *string `json:"background_color"`
	BorderColor       *string `json:"border_color"`
	BorderRadius      *string `json:"border_radius"`
	BorderSize        *string `json:"border_size"`
	Color             *string `json:"color"`
	Columns           *int64  `json:"columns"`
	DescriptionLines  *int64  `json:"description_lines"`
	IconBorderRadius  *string `json:"icon_border_radius"`
	IconShadowEnabled *bool   `json:"icon_shadow_enabled"`
	IconSize          *int64  `json:"icon_size"`
	ShadowEnabled     *bool   `json:"shadow_enabled"`
	ShowAction        *bool   `json:"show_action"`
	ShowBadges        *bool   `json:"show_badges"`
	ShowCategory      *bool   `json:"show_category"`
	ShowDescription   *bool   `json:"show_description"`
	Style             *string `json:"style"`
}
