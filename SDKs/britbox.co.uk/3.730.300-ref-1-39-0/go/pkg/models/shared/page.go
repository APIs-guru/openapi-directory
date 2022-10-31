package shared



type Page struct {
    CustomFields map[string]interface{} `json:"customFields,omitempty"`
    Entries []PageEntry `json:"entries"`
    ID string `json:"id"`
    IsStatic bool `json:"isStatic"`
    IsSystemPage bool `json:"isSystemPage"`
    Item *ItemDetail `json:"item,omitempty"`
    Key *string `json:"key,omitempty"`
    List *ItemList `json:"list,omitempty"`
    Metadata *PageMetadata `json:"metadata,omitempty"`
    Path string `json:"path"`
    Template string `json:"template"`
    Themes []Theme `json:"themes,omitempty"`
    Title string `json:"title"`
    
}

