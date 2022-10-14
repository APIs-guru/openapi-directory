package shared

type AspectValueDistribution struct {
	LocalizedAspectValue *string `json:"localizedAspectValue,omitempty"`
	MatchCount           *int32  `json:"matchCount,omitempty"`
	RefinementHref       *string `json:"refinementHref,omitempty"`
}
