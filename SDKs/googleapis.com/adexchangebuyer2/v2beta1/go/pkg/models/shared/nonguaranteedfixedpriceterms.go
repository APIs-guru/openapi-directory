package shared

// NonGuaranteedFixedPriceTerms
// Terms for Preferred Deals.
type NonGuaranteedFixedPriceTerms struct {
	FixedPrices []PricePerBuyer `json:"fixedPrices,omitempty"`
}
