package shared



type BigOvenModelApi2CollectionInfo struct {
    Description *string `json:"Description,omitempty"`
    ID *int32 `json:"ID,omitempty"`
    IsFiltered *bool `json:"IsFiltered,omitempty"`
    IsSponsored *bool `json:"IsSponsored,omitempty"`
    MobileURL *string `json:"MobileUrl,omitempty"`
    Pro *bool `json:"PRO,omitempty"`
    PhotoURL *string `json:"PhotoUrl,omitempty"`
    Results []BigOvenModelApi2RecipeInfox `json:"Results,omitempty"`
    Title *string `json:"Title,omitempty"`
    Token *string `json:"Token,omitempty"`
    WebURL *string `json:"WebUrl,omitempty"`
    
}

