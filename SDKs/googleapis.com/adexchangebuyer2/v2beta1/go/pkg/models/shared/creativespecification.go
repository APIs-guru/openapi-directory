package shared

type CreativeSpecification struct {
	CreativeCompanionSizes []AdSize `json:"creativeCompanionSizes"`
	CreativeSize           *AdSize  `json:"creativeSize"`
}
