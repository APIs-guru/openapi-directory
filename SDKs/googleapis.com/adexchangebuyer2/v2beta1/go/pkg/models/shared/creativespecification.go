package shared

// CreativeSpecification
// Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
type CreativeSpecification struct {
	CreativeCompanionSizes []AdSize `json:"creativeCompanionSizes,omitempty"`
	CreativeSize           *AdSize  `json:"creativeSize,omitempty"`
}
