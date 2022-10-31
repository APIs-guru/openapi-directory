package shared



type VideoAssets struct {
    Hls *string `json:"hls,omitempty"`
    Iframe *string `json:"iframe,omitempty"`
    Mp4 *string `json:"mp4,omitempty"`
    Player *string `json:"player,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    
}

