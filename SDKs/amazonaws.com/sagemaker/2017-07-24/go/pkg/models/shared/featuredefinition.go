package shared

type FeatureDefinition struct {
	FeatureName *string          `json:"FeatureName,omitempty"`
	FeatureType *FeatureTypeEnum `json:"FeatureType,omitempty"`
}
