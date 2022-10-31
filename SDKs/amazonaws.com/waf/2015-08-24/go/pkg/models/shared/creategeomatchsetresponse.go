package shared



type CreateGeoMatchSetResponse struct {
    ChangeToken *string `json:"ChangeToken,omitempty"`
    GeoMatchSet *GeoMatchSet `json:"GeoMatchSet,omitempty"`
    
}

