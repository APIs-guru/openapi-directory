package shared

type AspectValueDistribution struct {
	LocalizedAspectValue *string `json:"localizedAspectValue"`
	MatchCount           *int32  `json:"matchCount"`
	RefinementHref       *string `json:"refinementHref"`
}
