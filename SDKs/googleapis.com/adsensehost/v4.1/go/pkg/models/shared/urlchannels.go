package shared



type URLChannels struct {
    Etag *string `json:"etag,omitempty"`
    Items []URLChannel `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

