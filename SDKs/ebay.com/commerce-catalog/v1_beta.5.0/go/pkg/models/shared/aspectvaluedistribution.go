package shared

// AspectValueDistribution
// This type contains information about one value of a specified aspect. This value serves as a product refinement.
type AspectValueDistribution struct {
	LocalizedAspectValue *string `json:"localizedAspectValue,omitempty"`
	MatchCount           *int32  `json:"matchCount,omitempty"`
	RefinementHref       *string `json:"refinementHref,omitempty"`
}
