package shared



type CtaSettings struct {
    BackgroundColor *string `json:"background_color,omitempty"`
    ButtonBackgroundColor *string `json:"button_background_color,omitempty"`
    ButtonColor *string `json:"button_color,omitempty"`
    ButtonLabel *string `json:"button_label,omitempty"`
    ButtonLink *string `json:"button_link,omitempty"`
    Color *string `json:"color,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

