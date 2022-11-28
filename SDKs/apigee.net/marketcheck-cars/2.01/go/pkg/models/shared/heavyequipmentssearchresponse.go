package shared

// HeavyEquipmentsSearchResponse
// Heavy Equipments search query response
type HeavyEquipmentsSearchResponse struct {
	Facets      map[string]interface{}       `json:"facets,omitempty"`
	Listings    []HeavyEquipmentsBaseListing `json:"listings,omitempty"`
	NumFound    *int64                       `json:"num_found,omitempty"`
	RangeFacets map[string]interface{}       `json:"range_facets,omitempty"`
	Stats       map[string]interface{}       `json:"stats,omitempty"`
}
