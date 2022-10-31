package shared



type Place struct {
    AddressNumber *string `json:"AddressNumber,omitempty"`
    Country *string `json:"Country,omitempty"`
    Geometry PlaceGeometry `json:"Geometry"`
    Label *string `json:"Label,omitempty"`
    Municipality *string `json:"Municipality,omitempty"`
    Neighborhood *string `json:"Neighborhood,omitempty"`
    PostalCode *string `json:"PostalCode,omitempty"`
    Region *string `json:"Region,omitempty"`
    Street *string `json:"Street,omitempty"`
    SubRegion *string `json:"SubRegion,omitempty"`
    
}

