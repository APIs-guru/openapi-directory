package shared

type PlacementTargeting struct {
	MobileApplicationTargeting *MobileApplicationTargeting `json:"mobileApplicationTargeting,omitempty"`
	URITargeting               *URITargeting               `json:"uriTargeting,omitempty"`
}
