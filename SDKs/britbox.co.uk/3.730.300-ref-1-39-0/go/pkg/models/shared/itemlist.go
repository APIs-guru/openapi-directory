package shared




type ItemListItemTypesEnum string

const (
    ItemListItemTypesEnumMovie ItemListItemTypesEnum = "movie"
ItemListItemTypesEnumShow ItemListItemTypesEnum = "show"
ItemListItemTypesEnumSeason ItemListItemTypesEnum = "season"
ItemListItemTypesEnumEpisode ItemListItemTypesEnum = "episode"
ItemListItemTypesEnumProgram ItemListItemTypesEnum = "program"
ItemListItemTypesEnumLink ItemListItemTypesEnum = "link"
ItemListItemTypesEnumTrailer ItemListItemTypesEnum = "trailer"
ItemListItemTypesEnumChannel ItemListItemTypesEnum = "channel"
ItemListItemTypesEnumCustomAsset ItemListItemTypesEnum = "customAsset"
)


type ItemList struct {
    CustomFields map[string]interface{} `json:"customFields,omitempty"`
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    Images map[string]string `json:"images,omitempty"`
    ItemTypes []ItemListItemTypesEnum `json:"itemTypes,omitempty"`
    Items []ItemSummary `json:"items"`
    ListData *ListData `json:"listData,omitempty"`
    Paging Pagination `json:"paging"`
    Parameter *string `json:"parameter,omitempty"`
    Path string `json:"path"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    Size int32 `json:"size"`
    Tagline *string `json:"tagline,omitempty"`
    Themes []Theme `json:"themes,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

