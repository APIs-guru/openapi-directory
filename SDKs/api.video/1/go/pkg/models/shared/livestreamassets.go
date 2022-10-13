package shared

type LiveStreamAssets struct {
	Hls       *string `json:"hls"`
	Iframe    *string `json:"iframe"`
	Player    *string `json:"player"`
	Thumbnail *string `json:"thumbnail"`
}
