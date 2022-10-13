package shared

type PlacementTargeting struct {
	MobileApplicationTargeting *MobileApplicationTargeting `json:"mobileApplicationTargeting"`
	URITargeting               *URITargeting               `json:"uriTargeting"`
}
