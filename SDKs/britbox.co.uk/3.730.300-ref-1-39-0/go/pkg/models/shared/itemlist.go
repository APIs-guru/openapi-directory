package shared

type ItemListItemTypesEnum string

const (
	ItemListItemTypesEnumMovie       ItemListItemTypesEnum = "movie"
	ItemListItemTypesEnumShow        ItemListItemTypesEnum = "show"
	ItemListItemTypesEnumSeason      ItemListItemTypesEnum = "season"
	ItemListItemTypesEnumEpisode     ItemListItemTypesEnum = "episode"
	ItemListItemTypesEnumProgram     ItemListItemTypesEnum = "program"
	ItemListItemTypesEnumLink        ItemListItemTypesEnum = "link"
	ItemListItemTypesEnumTrailer     ItemListItemTypesEnum = "trailer"
	ItemListItemTypesEnumChannel     ItemListItemTypesEnum = "channel"
	ItemListItemTypesEnumCustomAsset ItemListItemTypesEnum = "customAsset"
)

type ItemList struct {
	CustomFields     map[string]interface{}  `json:"customFields"`
	Description      *string                 `json:"description"`
	ID               string                  `json:"id"`
	Images           map[string]string       `json:"images"`
	ItemTypes        []ItemListItemTypesEnum `json:"itemTypes"`
	Items            []ItemSummary           `json:"items"`
	ListData         *ListData               `json:"listData"`
	Paging           Pagination              `json:"paging"`
	Parameter        *string                 `json:"parameter"`
	Path             string                  `json:"path"`
	ShortDescription *string                 `json:"shortDescription"`
	Size             int32                   `json:"size"`
	Tagline          *string                 `json:"tagline"`
	Themes           []Theme                 `json:"themes"`
	Title            *string                 `json:"title"`
}
