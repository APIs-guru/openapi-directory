package shared

// Explanation
// Explanation for a single feature.
type Explanation struct {
	Attribution *float64 `json:"attribution,omitempty"`
	FeatureName *string  `json:"featureName,omitempty"`
}
