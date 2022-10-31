package shared



type Location struct {
    Address *Address `json:"address,omitempty"`
    GeoCoordinates *GeoCoordinates `json:"geoCoordinates,omitempty"`
    
}

