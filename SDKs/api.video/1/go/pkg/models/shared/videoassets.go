package shared

// VideoAssets
// Collection of details about the video object that you can use to work with the video object.
type VideoAssets struct {
	Hls       *string `json:"hls,omitempty"`
	Iframe    *string `json:"iframe,omitempty"`
	Mp4       *string `json:"mp4,omitempty"`
	Player    *string `json:"player,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
}
