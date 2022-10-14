package shared

type VideoSearchItemDisplaySize struct {
	AspectRatio   *string `json:"aspect_ratio,omitempty"`
	IsWatermarked *bool   `json:"is_watermarked,omitempty"`
	Name          *string `json:"name,omitempty"`
	URI           *string `json:"uri,omitempty"`
}
