package shared

type BigOvenModelApi2CollectionInfo struct {
	Description *string                       `json:"Description"`
	ID          *int32                        `json:"ID"`
	IsFiltered  *bool                         `json:"IsFiltered"`
	IsSponsored *bool                         `json:"IsSponsored"`
	MobileURL   *string                       `json:"MobileUrl"`
	Pro         *bool                         `json:"PRO"`
	PhotoURL    *string                       `json:"PhotoUrl"`
	Results     []BigOvenModelApi2RecipeInfox `json:"Results"`
	Title       *string                       `json:"Title"`
	Token       *string                       `json:"Token"`
	WebURL      *string                       `json:"WebUrl"`
}
