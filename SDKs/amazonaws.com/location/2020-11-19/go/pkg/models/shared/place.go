package shared

type Place struct {
	AddressNumber *string       `json:"AddressNumber"`
	Country       *string       `json:"Country"`
	Geometry      PlaceGeometry `json:"Geometry"`
	Label         *string       `json:"Label"`
	Municipality  *string       `json:"Municipality"`
	Neighborhood  *string       `json:"Neighborhood"`
	PostalCode    *string       `json:"PostalCode"`
	Region        *string       `json:"Region"`
	Street        *string       `json:"Street"`
	SubRegion     *string       `json:"SubRegion"`
}
