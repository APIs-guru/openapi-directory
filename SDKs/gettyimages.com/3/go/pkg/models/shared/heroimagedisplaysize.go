package shared

type HeroImageDisplaySize struct {
	IsWatermarked *bool   `json:"is_watermarked,omitempty"`
	Name          *string `json:"name,omitempty"`
	URI           *string `json:"uri,omitempty"`
}
