package shared

type CardSettings struct {
	BackgroundColor   *string `json:"background_color,omitempty"`
	BorderColor       *string `json:"border_color,omitempty"`
	BorderRadius      *string `json:"border_radius,omitempty"`
	BorderSize        *string `json:"border_size,omitempty"`
	Color             *string `json:"color,omitempty"`
	Columns           *int64  `json:"columns,omitempty"`
	DescriptionLines  *int64  `json:"description_lines,omitempty"`
	IconBorderRadius  *string `json:"icon_border_radius,omitempty"`
	IconShadowEnabled *bool   `json:"icon_shadow_enabled,omitempty"`
	IconSize          *int64  `json:"icon_size,omitempty"`
	ShadowEnabled     *bool   `json:"shadow_enabled,omitempty"`
	ShowAction        *bool   `json:"show_action,omitempty"`
	ShowBadges        *bool   `json:"show_badges,omitempty"`
	ShowCategory      *bool   `json:"show_category,omitempty"`
	ShowDescription   *bool   `json:"show_description,omitempty"`
	Style             *string `json:"style,omitempty"`
}
