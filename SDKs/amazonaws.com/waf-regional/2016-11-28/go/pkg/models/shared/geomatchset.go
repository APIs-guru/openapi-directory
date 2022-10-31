package shared



type GeoMatchSet struct {
    GeoMatchConstraints []GeoMatchConstraint `json:"GeoMatchConstraints"`
    GeoMatchSetID string `json:"GeoMatchSetId"`
    Name *string `json:"Name,omitempty"`
    
}

