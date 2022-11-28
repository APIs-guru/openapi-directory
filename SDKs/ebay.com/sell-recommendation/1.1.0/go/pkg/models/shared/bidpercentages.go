package shared

// BidPercentages
// A complex type that returns data related to Promoted Listings bid percentages.
type BidPercentages struct {
	Basis *string `json:"basis,omitempty"`
	Value *string `json:"value,omitempty"`
}
