package shared

type PlacementTargeting struct {
	MobileApplicationTargeting *MobileApplicationTargeting `json:"mobileApplicationTargeting"`
	URLTargeting               *URLTargeting               `json:"urlTargeting"`
}
