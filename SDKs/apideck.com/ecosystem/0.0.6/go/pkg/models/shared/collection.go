package shared

type Collection struct {
	CardBackgroundColor  *string       `json:"card_background_color"`
	CardBackgroundImage  *File         `json:"card_background_image"`
	CardColumns          *int64        `json:"card_columns"`
	CardStyle            *string       `json:"card_style"`
	Count                *int64        `json:"count"`
	Description          *string       `json:"description"`
	HiddenFromHomepage   *bool         `json:"hidden_from_homepage"`
	ID                   *string       `json:"id"`
	Logo                 *File         `json:"logo"`
	Name                 string        `json:"name"`
	Sequence             *int64        `json:"sequence"`
	ShowMaxItemsHomepage *int64        `json:"show_max_items_homepage"`
	Slug                 string        `json:"slug"`
	Translations         []Translation `json:"translations"`
	Visible              bool          `json:"visible"`
}
