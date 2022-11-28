package shared

// PlacementTargeting
// Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
type PlacementTargeting struct {
	MobileApplicationTargeting *MobileApplicationTargeting `json:"mobileApplicationTargeting,omitempty"`
	URITargeting               *URITargeting               `json:"uriTargeting,omitempty"`
}
