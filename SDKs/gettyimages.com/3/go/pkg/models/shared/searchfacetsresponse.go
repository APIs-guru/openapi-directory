package shared



type SearchFacetsResponse struct {
    Artists []Artist `json:"artists,omitempty"`
    Entertainment []Entertainment `json:"entertainment,omitempty"`
    Events []FacetEvent `json:"events,omitempty"`
    Locations []Location `json:"locations,omitempty"`
    SpecificPeople []SpecificPeople `json:"specific_people,omitempty"`
    
}

