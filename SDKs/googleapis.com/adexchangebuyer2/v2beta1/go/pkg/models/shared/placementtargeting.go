package shared

type PlacementTargeting struct {
	MobileApplicationTargeting *MobileApplicationTargeting `json:"mobileApplicationTargeting,omitempty"`
	URLTargeting               *URLTargeting               `json:"urlTargeting,omitempty"`
}
