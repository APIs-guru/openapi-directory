package shared

// DealServingMetadata
// Message captures metadata about the serving status of a deal.
type DealServingMetadata struct {
	DealPauseStatus *DealPauseStatus `json:"dealPauseStatus,omitempty"`
}
