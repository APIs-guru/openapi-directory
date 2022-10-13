package shared

type VideoSearchItemDisplaySize struct {
	AspectRatio   *string `json:"aspect_ratio"`
	IsWatermarked *bool   `json:"is_watermarked"`
	Name          *string `json:"name"`
	URI           *string `json:"uri"`
}
