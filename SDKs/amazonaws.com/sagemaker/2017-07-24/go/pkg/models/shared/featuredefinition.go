package shared

type FeatureDefinition struct {
	FeatureName *string          `json:"FeatureName"`
	FeatureType *FeatureTypeEnum `json:"FeatureType"`
}
