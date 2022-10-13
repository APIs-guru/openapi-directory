package shared

type FeatureValue struct {
	CategoricalValue *CategoricalValue `json:"categoricalValue"`
	FeatureColumn    *string           `json:"featureColumn"`
	NumericalValue   *float64          `json:"numericalValue"`
}
