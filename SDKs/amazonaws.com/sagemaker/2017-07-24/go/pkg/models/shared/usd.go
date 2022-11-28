package shared

// Usd
// Represents an amount of money in United States dollars.
type Usd struct {
	Cents                 *int64 `json:"Cents,omitempty"`
	Dollars               *int64 `json:"Dollars,omitempty"`
	TenthFractionsOfACent *int64 `json:"TenthFractionsOfACent,omitempty"`
}
