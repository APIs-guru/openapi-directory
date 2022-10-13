package shared

type SearchFacetsResponse struct {
	Artists        []Artist         `json:"artists"`
	Entertainment  []Entertainment  `json:"entertainment"`
	Events         []FacetEvent     `json:"events"`
	Locations      []Location       `json:"locations"`
	SpecificPeople []SpecificPeople `json:"specific_people"`
}
