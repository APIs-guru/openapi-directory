package shared



type Country struct {
    IsoAlpha2 *string `json:"iso_alpha_2,omitempty"`
    IsoAlpha3 *string `json:"iso_alpha_3,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

