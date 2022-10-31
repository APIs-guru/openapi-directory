package shared



type Collection struct {
    CardBackgroundColor *string `json:"card_background_color,omitempty"`
    CardBackgroundImage *File `json:"card_background_image,omitempty"`
    CardColumns *int64 `json:"card_columns,omitempty"`
    CardStyle *string `json:"card_style,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Description *string `json:"description,omitempty"`
    HiddenFromHomepage *bool `json:"hidden_from_homepage,omitempty"`
    ID *string `json:"id,omitempty"`
    Logo *File `json:"logo,omitempty"`
    Name string `json:"name"`
    Sequence *int64 `json:"sequence,omitempty"`
    ShowMaxItemsHomepage *int64 `json:"show_max_items_homepage,omitempty"`
    Slug string `json:"slug"`
    Translations []Translation `json:"translations,omitempty"`
    Visible bool `json:"visible"`
    
}

