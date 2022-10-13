package shared

type HeroImageDisplaySize struct {
	IsWatermarked *bool   `json:"is_watermarked"`
	Name          *string `json:"name"`
	URI           *string `json:"uri"`
}
