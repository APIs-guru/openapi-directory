package shared



type HeroImage struct {
    DisplaySizes []HeroImageDisplaySize `json:"display_sizes,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

