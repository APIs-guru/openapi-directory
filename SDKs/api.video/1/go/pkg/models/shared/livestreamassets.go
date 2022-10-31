package shared



type LiveStreamAssets struct {
    Hls *string `json:"hls,omitempty"`
    Iframe *string `json:"iframe,omitempty"`
    Player *string `json:"player,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    
}

