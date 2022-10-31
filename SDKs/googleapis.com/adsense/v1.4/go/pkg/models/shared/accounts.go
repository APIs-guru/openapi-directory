package shared



type Accounts struct {
    Etag *string `json:"etag,omitempty"`
    Items []Account `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

