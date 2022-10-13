package shared

type HeroImage struct {
	DisplaySizes []HeroImageDisplaySize `json:"display_sizes"`
	ID           *string                `json:"id"`
}
