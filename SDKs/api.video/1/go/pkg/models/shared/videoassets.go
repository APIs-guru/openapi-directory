package shared

type VideoAssets struct {
	Hls       *string `json:"hls"`
	Iframe    *string `json:"iframe"`
	Mp4       *string `json:"mp4"`
	Player    *string `json:"player"`
	Thumbnail *string `json:"thumbnail"`
}
