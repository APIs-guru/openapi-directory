package shared



type AdUnits struct {
    Etag *string `json:"etag,omitempty"`
    Items []AdUnit `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

