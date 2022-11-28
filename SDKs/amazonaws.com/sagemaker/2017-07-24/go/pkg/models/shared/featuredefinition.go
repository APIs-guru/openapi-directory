package shared

// FeatureDefinition
// A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>.
type FeatureDefinition struct {
	FeatureName *string          `json:"FeatureName,omitempty"`
	FeatureType *FeatureTypeEnum `json:"FeatureType,omitempty"`
}
