package shared

// FeatureValue
// Representative value of a single feature within the cluster.
type FeatureValue struct {
	CategoricalValue *CategoricalValue `json:"categoricalValue,omitempty"`
	FeatureColumn    *string           `json:"featureColumn,omitempty"`
	NumericalValue   *float64          `json:"numericalValue,omitempty"`
}
